const news = () => {
    const timeServer = document.getElementById('time-server');
    if (timeServer) {
        timeServer.innerHTML = `${new Date().timeNow()} - ${new Date().today()}`;
    }
}

export default news;