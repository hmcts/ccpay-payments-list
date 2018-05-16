class PaymentsList extends HTMLElement {

    constructor() {
        super();

        const data = JSON.parse(this.getAttribute("data"));

        for ( var row in data) {
            data[row].date = new Date(data[row].date);
        }

        const shadow = this.attachShadow({mode: 'open'})

        var transform = { '<>' : 'tr', 'html' : '<td>${reference}</td><td>${date}</td><td>£${amount}</td><td>${payer}</td>'};

        var table = document.createElement('table');
        table.setAttribute("border", "1");

        var header = '<tr><th>Reference</th><th>Date</th><th>Amount</th><th>Payer</th></tr>'

        table.innerHTML = header + json2html.transform(data, transform);

        shadow.appendChild(table);
    }

}

customElements.define('payments-list', PaymentsList);