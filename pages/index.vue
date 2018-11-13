<template>
    <div class="rent-form-interface-container">
        <div>Formular</div>
        <table>
            <thead>
                <tr>
                    <th>Felter</th>
                    <th>Synlighed</th>
                    <th>standard værdi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Organistions type</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>Organistions navn</td>
                </tr>
                <tr>
                    <td>Fornavn</td>
                </tr>
                <tr>
                    <td>Efternavn</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                </tr>
                <tr>
                    <td>Postnummer</td>
                </tr>
                <tr>
                    <td>By</td>
                </tr>
                <tr>
                    <td>Land</td>
                </tr>
                <tr>
                    <td>Tlf nummer</td>
                </tr>
                <tr>
                    <td>Email</td>
                </tr>
                <tr>
                    <td>Bank navn</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>Registrerings nummer</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>Konto nummer</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>EAN nummer</td>
                    <td><input type="checkbox"></td>
                </tr>
                <tr>
                    <td>Rengøring</td>
                    <td><input type="checkbox"></td>
                    <td><input type="text" name="cleaning-default-message" placeholder="Rengøringen er inkluderet" id=""></td>
                </tr>
                <tr>
                    <td>Ankomst dato</td>
                </tr>
                <tr>
                    <td>Ankomst tidspukt</td>
                    <td><input class="hideable" type="checkbox"></td>
                    <td><input type="text" name="arrival-default-time" placeholder="17:00" id=""></td>
                </tr>
                <tr>
                    <td>Afrejse dato</td>
                </tr>
                <tr>
                    <td>Afrejse tidspukt</td>
                    <td><input class="hideable" type="checkbox"></td>
                    <td><input type="text" name="departure-default-time" placeholder="15:00" id=""></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>