(function () {
    var margin = { top: 5000, left: 12000, right: 0, bottom: 0 },
        height = 500 - margin.top - margin.bottom,
        width = 800 - margin.left - margin.right;

    var svg = d3.select("#map")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // d3.queue()
    //     .defer(d3.json, "world.topojson")
    //     .await(ready)

    var projection = d3.geoMercator()
        .translate([width / 2, height / 2])
        .scale(4100)

    var path = d3.geoPath()
        .projection(projection)

    var color = d3.scaleQuantize()
        .domain([0, 2000])
        .range(d3.schemeReds[8]);


    d3.json("/api/coviddata") //need to change out wit api route to gather data
        .then(covidData => {
            console.log(covidData[0])
            d3.json("georgia.json")
                .then(function (data) {
                    // console.log(data)

                    const consolidatedData = data.objects.cb_2015_georgia_county_20m.geometries.map(county => {
                        const geoCounty = { ...county } // copy the data info

                        covidData.forEach(covCounty => {
                            if (covCounty.cName === geoCounty.properties.NAME) {
                                geoCounty.properties.covid_cases = covCounty.cases;
                                geoCounty.properties.covid_deaths = covCounty.deaths;
                                geoCounty.properties.confirm_rate = covCounty.cRate;
                                geoCounty.properties.hospitals = covCounty.hospital;
                                return; // breaks the loop
                            }
                        })

                        return geoCounty; // returns the new object to the new array
                    });


                    data.objects.cb_2015_georgia_county_20m.geometries = consolidatedData
                    // console.log("data", consolidatedData)
                    var counties = topojson.feature(data, data.objects.cb_2015_georgia_county_20m).features


                    const toolTip = d3.select('body').append('div')
                        .attr('class', 'tooltip');
                    svg.selectAll(".counties")
                        .data(counties)
                        .enter().append("path")
                        .attr("class", "counties")
                        .attr("d", path)
                        .style("fill", d => color(d.properties.confirm_rate))
                        .on("mouseover", function (d) {
                            // console.log(d)
                            toolTip.style('display', 'block');
                            d3.select(this).style("cursor", "pointer");
                            toolTip.html(`<h3><strong>${d.properties.NAME} County</strong></h3>
                            <p><strong>Cases:</strong> ${d.properties.covid_cases}</p>
                            <p><strong>Hospitilizations:</strong> ${d.properties.hospitals}</p> 
                            <p><strong>Deaths:</strong> ${d.properties.covid_deaths}</p> 
                            <p><strong>Cases Per 100k:</strong> ${d.properties.confirm_rate}</p> `)
                                .style('left', d3.event.pageX + 'px')
                                .style('top', d3.event.pageY + 'px');
                        })
                        .on("mouseout", function (d) {
                            toolTip.style('display', 'none');
                        })
                        .on("click", function(d){
                            location.href = `/counties/${d.properties.NAME}`
                        })



                }).catch(function (error) {
                    throw error
                });

        }).catch(function (error) {
            throw error
        });

})()