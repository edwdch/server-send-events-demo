import EventSource from 'eventsource'

const es = new EventSource('http://localhost:3000/events')
es.onmessage = (event) => {
    console.log(event);
}
