const autocannon = require('autocannon');

const url = ['http://localhost:4000', 'http://localhost:4000/stress']
const duration = 30


url.forEach((url) => {

    const instance = autocannon({
        url,
        duration
    }, (err, result) => {
        if (err) {
            console.error('Error running autocannon:', err);
        } else {
            console.log('Total no. of request:', result.requests.total);
            console.log('Total duration:', result.duration);
        }
    });

    autocannon.track(instance, { renderProgressBar: false, renderResultsTable: false })

})
