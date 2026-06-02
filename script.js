new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    {
                        name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE",
                        x: 5,
                        y: 7200000,
                    },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    {
                        name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL",
                        x: 4,
                        y: 4814000,
                    },
                    {
                        name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4030000,
                    },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    {
                        name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA",
                        x: 4,
                        y: 4763300,
                    },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    {
                        name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA",
                        x: 5,
                        y: 5120000,
                    },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    {
                        name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 6000000,
                    },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    {
                        name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 5180000,
                    },
                    {
                        name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS",
                        x: 5,
                        y: 5900000,
                    },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});
new Chart(document.getElementById("otro"), {
    type: "bar",
    data: {
        labels: [
            "U. Viña del Mar",
            "U. Las Américas",
            "U. La Serena",
            "U. Playa Ancha",
            "UDD Biobío",
            "U. Cat. Temuco",
            "U. de Talca",
            "U. de Valparaíso",
            "U. Austral",
            "U. de Chile",
            "U. Finis Terrae",
            "PUC Chile",
            "U. Diego Portales",
            "PUCV",
            "UDD Santiago",
        ],
        datasets: [
            {
                label: "Costo según plan formal",
                data: [19.2, 21.5, 20.4, 19.6, 30.3, 26.5, 29.4, 28.6, 26.7, 32.4, 33.3, 40.4, 38.0, 34.6, 48.8],
                backgroundColor: "rgba(30,30,30,0.85)",
                stack: "s",
                borderRadius: 0,
            },
            {
                label: "Costo adicional por sobreduración",
                data: [4.3, 4.7, 6.1, 8.6, 0, 7.9, 5.9, 8.6, 11.8, 9.7, 11.0, 4.0, 7.6, 13.8, 0],
                backgroundColor: "rgba(241,142,45,0.85)",
                stack: "s",
                borderRadius: 2,
            },
        ],
    },
    options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    boxWidth: 12,
                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ": $" + context.parsed.x.toFixed(1) + "M";
                    },
                    footer: function (items) {
                        const total = items.reduce((sum, i) => sum + i.parsed.x, 0);
                        return "Total: $" + total.toFixed(1) + "M";
                    },
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$" + value + "M";
                    },
                },
            },
            y: {
                stacked: true,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                },
            },
        },
    },
});
