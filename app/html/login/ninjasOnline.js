const ninjasOnline = () => {
    const checkNinjasOnline = document.getElementById('ninjas-online');
    if (checkNinjasOnline) {
        let ninjas = '';
        [1, 2, 3, 4, 5].forEach(ninja => {
            ninjas += `
                <tr>
                    <td><img src="../assets/img/icons/online.png" alt="Status"></td>
                    <td>Clan - Name</td>
                    <td><img src="../assets/img/villages/1.png" width="40px" alt="Village"></td>
                    <td>18</td>
                    <td>2060</td>
                </tr>
            `;
        });
        checkNinjasOnline.innerHTML = ninjas;
    }
}

export default ninjasOnline;