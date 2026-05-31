var vg_1 = "VEGA-LITE/demand_chart.vg.json"
vegaEmbed("#growth-chart", vg_1,).then(function(result){
    // Access the Vega view instance
    // () as result.view
}).catch(console.error);
var vg_2 = "VEGA-LITE/adoption_map.vg.json"
vegaEmbed("#geographical-chart", vg_2,).then(function(result){
    // Access the Vega view instance
    // () as result.view
}).catch(console.error);


vegaEmbed("#sectors-chart",  "VEGA-LITE/ai_companies_by_sector.vg.json",  { actions: false, renderer: "svg" }).catch(console.error);
vegaEmbed("#exposure-chart", "VEGA-LITE/ai_skills_by_occupation.vg.json", { actions: false, renderer: "svg" }).catch(console.error);

// Hero Chart
vegaEmbed("#hero-chart", "VEGA-LITE/ai_bubble_hero.vg.json", { actions: false, renderer: "svg" }).catch(console.error);

// Act 1 — Choropleth
vegaEmbed("#choropleth-chart", "VEGA-LITE/adoption_map.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);

// Act 1 — Metro vs Regional dumbbell
vegaEmbed("#dumbbell-chart", "VEGA-LITE/metro_regional_dumbbell.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);

// Act 2 - Who
vegaEmbed("#who-chart", "VEGA-LITE/adoption_by_industry.vg.json", { actions: false, renderer: "svg" }).catch(console.error);
vegaEmbed("#sector-scatter", "VEGA-LITE/ai_sector_scatter.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);
vegaEmbed("#waves-chart", "VEGA-LITE/waves.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);
vegaEmbed("#exposure-chart", "VEGA-LITE/ai_skills_by_occupation.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);

// Act 3 — State × Industry heatmap
vegaEmbed("#heatmap-chart", "VEGA-LITE/state_industry_heatmap.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);

// Act 4 — Choropleth pair
vegaEmbed("#choropleth-pair", "VEGA-LITE/choropleth_pair.vg.json", { actions: false, renderer: "svg" }).catch(console.error);

// Act 4 — Slope chart
vegaEmbed("#slope-chart", "VEGA-LITE/slope_chart.vg.json", { actions: false, renderer: "svg", width: "container" }).catch(console.error);

// Act 4 — Waffle chart
vegaEmbed("#waffle-chart", "VEGA-LITE/waffle.vg.json", { actions: false, renderer: "svg" }).catch(console.error);