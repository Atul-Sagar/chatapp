function generateLayout(){
    var layoutCount = parseInt(document.getElementById('layoutCount').value);
    var dynamicLayout = document.getElementById('dynamicLayout');
    dynamicLayout.innerHTML = '';

    for(var i = 1; i <= layoutCount; i++){
        var layout = `
    <div class="grid-row">
        <div class="layout-item">
            <h2>Graph ${i * 2 - 1}</h2>
            <div>
                <label for="csvFile${i * 2 - 1}">Select CSV File:</label>
                <input type="file" id="csvFile${i * 2 - 1}" accept=".csv">
            </div>
            <div>
                <label for="stockName${i * 2 - 1}">Enter Stock Name:</label>
                <input type="text" id="stockName${i * 2 - 1}">
            </div>
            <div>
                <label for="chartTitle${i * 2 - 1}">Chart Title:</label>
                <input type="text" id="chartTitle${i * 2 - 1}">
            </div>
            <div>
                <label for="enableGrid${i * 2 - 1}">Enable Grid Lines:</label>
                <input type="checkbox" id="enableGrid${i * 2 - 1}">
            </div>
            <div>
                <label for="enableLegend${i * 2 - 1}">Show Legend:</label>
                <input type="checkbox" id="enableLegend${i * 2 - 1}">
            </div>
            <div>
                <label for="enableRangeSelector${i * 2 - 1}">Show Range Selector:</label>
                <input type="checkbox" id="enableRangeSelector${i * 2 - 1}">
            </div>
            <div>
                <label for="theme${i * 2 - 1}">Chart Theme:</label>
                <select id="theme${i * 2 - 1}">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <button onclick="loadData(${i * 2 - 1})">Load Data</button>
            <div id="container${i * 2 - 1}"></div>
        </div>
        <div class="layout-item">
            <h2>Graph ${i * 2}</h2>
            <div>
                <label for="csvFile${i * 2}">Select CSV File:</label>
                <input type="file" id="csvFile${i * 2}" accept=".csv">
            </div>
            <div>
                <label for="stockName${i * 2}">Enter Stock Name:</label>
                <input type="text" id="stockName${i * 2}">
            </div>
            <div>
                <label for="chartTitle${i * 2}">Chart Title:</label>
                <input type="text" id="chartTitle${i * 2}">
            </div>
            <div>
                <label for="enableGrid${i * 2}">Enable Grid Lines:</label>
                <input type="checkbox" id="enableGrid${i * 2}">
            </div>
            <div>
                <label for="enableLegend${i * 2}">Show Legend:</label>
                <input type="checkbox" id="enableLegend${i * 2}">
            </div>
            <div>
                <label for="enableRangeSelector${i * 2}">Show Range Selector:</label>
                <input type="checkbox" id="enableRangeSelector${i * 2}">
            </div>
            <div>
                <label for="theme${i * 2}">Chart Theme:</label>
                <select id="theme${i * 2}">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <button onclick="loadData(${i * 2})">Load Data</button>
            <div id="container${i * 2}"></div>
        </div>
    </div>
`;

        dynamicLayout.innerHTML += layout;
    }

}

function loadData(index){
    console.log(`Loading data for graph ${index}`);
}