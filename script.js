fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
.then(res => res.json())
.then(data =>{

    console.log(data)

    casa1_r = data[0];
    casa2_r = data[1];
    casa3_r = data[2];
    casa4_r = data[3];
    casa5_r = data[4];
    casa6_r = data[5];
    casa7_r = data[6];
    casa8_r = data[7];
    casa9_r = data[8];

    casa1 = casa1_r['casa']
    casa1_name = casa1['nombre']
    casa1_compra = casa1['compra']
    casa1_venta = casa1['venta']
    casa1_ventaCero = casa1['ventaCero']
    casa1_variacion = casa1['variacion']
    casa1_agencia = casa1['agencia']
    casa1_decimales = casa1['decimales']

    casa2 = casa2_r['casa']
    casa2_name = casa2['nombre']
    casa2_compra = casa2['compra']
    casa2_venta = casa2['venta']
    casa2_ventaCero = casa2['ventaCero']
    casa2_variacion = casa2['variacion']
    casa2_agencia = casa2['agencia']
    casa2_decimales = casa2['decimales']

    casa3 = casa3_r['casa']
    casa3_name = casa3['nombre']
    casa3_compra = casa3['compra']
    casa3_venta = casa3['venta']
    casa3_ventaCero = casa3['ventaCero']
    casa3_variacion = casa3['variacion']
    casa3_agencia = casa3['agencia']
    casa3_decimales = casa3['decimales']

    casa4 = casa4_r['casa']
    casa4_name = casa4['nombre']
    casa4_compra = casa4['compra']
    casa4_venta = casa4['venta']
    casa4_ventaCero = casa4['ventaCero']
    casa4_variacion = casa4['variacion']
    casa4_agencia = casa4['agencia']
    casa4_decimales = casa4['decimales']

    casa5 = casa5_r['casa']
    casa5_name = casa5['nombre']
    casa5_compra = casa5['compra']
    casa5_venta = casa5['venta']
    casa5_ventaCero = casa5['ventaCero']
    casa5_variacion = casa5['variacion']
    casa5_agencia = casa5['agencia']
    casa5_decimales = casa5['decimales']

    casa6 = casa6_r['casa']
    casa6_name = casa6['nombre']
    casa6_compra = casa6['compra']
    casa6_venta = casa6['venta']
    casa6_ventaCero = casa6['ventaCero']
    casa6_variacion = casa6['variacion']
    casa6_agencia = casa6['agencia']
    casa6_decimales = casa6['decimales']

    casa7 = casa7_r['casa']
    casa7_name = casa7['nombre']
    casa7_compra = casa7['compra']
    casa7_venta = casa7['venta']
    casa7_ventaCero = casa7['ventaCero']
    casa7_variacion = casa7['variacion']
    casa7_agencia = casa7['agencia']
    casa7_decimales = casa7['decimales']

    casa8 = casa8_r['casa']
    casa8_name = casa8['nombre']
    casa8_compra = casa8['compra']
    casa8_venta = casa8['venta']
    casa8_ventaCero = casa8['ventaCero']
    casa8_variacion = casa8['variacion']
    casa8_agencia = casa8['agencia']
    casa8_decimales = casa8['decimales']

    casa9 = casa9_r['casa']
    casa9_name = casa9['nombre']
    casa9_compra = casa9['compra']
    casa9_venta = casa9['venta']
    casa9_ventaCero = casa9['ventaCero']
    casa9_variacion = casa9['variacion']
    casa9_agencia = casa9['agencia']
    casa9_decimales = casa9['decimales']
    

    document.getElementById('cuadro_Oficial').innerHTML = 
    `<table class="table">
        <thead>
            <tr>
                <th>Dolar</th>
                <th>Compra</th>
                <th>Venta</th>
                <th>Variación</th>
                <th>Agencia</th>
                <th>Veta Cero</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row">${casa1_name}</td>
                <td>$${casa1_compra}</td>
                <td>$${casa1_venta}</td>
                <td>$${casa1_variacion}</td>
                <td>${casa1_agencia}</td>
                <td>${casa1_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa2_name}</td>
                <td>$${casa2_compra}</td>
                <td>$${casa2_venta}</td>
                <td>$${casa2_variacion}</td>
                <td>${casa2_agencia}</td>
                <td>${casa2_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa3_name}</td>
                <td>${casa3_compra}</td>
                <td>-</td>
                <td>-</td>
                <td>${casa3_agencia}</td>
                <td>${casa3_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa4_name}</td>
                <td>$${casa4_compra}</td>
                <td>$${casa4_venta}</td>
                <td>$${casa4_variacion}</td>
                <td>${casa4_agencia}</td>
                <td>${casa4_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa5_name}</td>
                <td>$${casa5_compra}</td>
                <td>$${casa5_venta}</td>
                <td>$${casa5_variacion}</td>
                <td>${casa5_agencia}</td>
                <td>${casa5_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa6_name}</td>
                <td>$${casa6_compra}</td>
                <td>-</td>
                <td>$${casa6_variacion}</td>
                <td>${casa6_agencia}</td>
                <td>${casa6_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa7_name}</td>
                <td>${casa7_compra}</td>
                <td>$${casa7_venta}</td>
                <td>$${casa7_variacion}</td>
                <td>${casa7_agencia}</td>
                <td>${casa7_ventaCero}</td>
            </tr>
            <tr>
                <td scope="row">${casa8_name}</td>
                <td>$${casa8_compra}</td>
                <td>$${casa8_venta}</td>
                <td>-</td>
                <td>${casa8_agencia}</td>
                <td>-</td>
            </tr>
            <tr>
                <td scope="row">${casa9_name}</td>
                <td>$${casa9_compra}</td>
                <td>$${casa9_venta}</td>
                <td>-</td>
                <td>${casa9_agencia}</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>`;
})