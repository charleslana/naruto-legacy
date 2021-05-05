const eventsActive = () => {
    const checkEventsActive = document.getElementById('events-active');
    if (checkEventsActive) {
        let events = '';
        [1, 2].forEach(event => {
            events += `
                <tr>
                    <td><img src="../assets/img/icons/online.png" alt="Status"></td>
                    <td>Invasão do Boss</td>
                </tr>
            `;
        });
        checkEventsActive.innerHTML = events;
    }
}

export default eventsActive;