/**
 *
 * This call sends a message to one recipient.
 *
 */
import Mailjet from "node-mailjet";
import { storeName } from "../helpers/storesNames.js";

export const sendEmailToStore = (data) => {
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC || "",
    apiSecret: process.env.MJ_APIKEY_PRIVATE || "",
  });
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "anthonysa0813@gmail.com",
          Name: "Tienda de anthony",
        },
        To: [
          {
            Email: storeName[data.store],
            Name: data.store,
          },
        ],
        Subject: "registro de promoción",
        TextPart:
          "Querido usario, se ha registrado tu descuento en nuestra tienda",
        HTMLPart: `
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
      rel="stylesheet"
    />
    <title>CrediVargas</title>
<!--[if mso]>
      <style>
        .button {
         border-radius: 5px;
      background-color: #175676;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 10px;
      text-align: center;
      display: inline-block;
      cursor: pointer;
        }
    
      </style>
    <![endif]-->

    <!--[if !mso]><!-->
      <style>
        .button {
           border-radius: 5px;
      background-color: #175676;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 10px;
      text-align: center;
      display: inline-block;
      font-weight: bold;
      cursor: pointer;
    
        }
      </style>
    <!--<![endif]-->
  </head>
  <body style="font-family: Poppins;">
    <table>
  <tr>
    <td style="mso-margin-top-alt:10px; mso-margin-bottom-alt:10px;">
         <a href="https://credivargas.pe/tienda/pucallpa" target="_blank">
        <img
          width="120"
          style="border-width:0;"
          border="0"
          src="https://credivargas.pe/images/credivargas-logo-lineal.png?V=5"
          alt="Logo de CrediVargas"
        />
      </a>
    </td>
  </tr>
    </table>
  
    <div class="name">
      <h4
        style="
          Margin: 0;
          margin-top: 1rem;
          font-family: Poppins;
          font-size: 1.2rem;
          color: #175676;
        "
      >
        El usuario ${data.name}, acaba de registrarse con un cupon
      </h4>
      <span style="font-family: Poppins; font-size: 14px; Margin: 0 0 0 0;">

      <table>
      <tr>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Teléfono</th>
        <th>Tipo de documento</th>
        <th>Número de documento</th>
        <th>Tienda</th>
        <th>Email</th>
        <th>Cupón</th>
      </tr>
      <tr>
       <td> ${data.name} </td>
       <td> ${data.lastName} </td>
        <td> ${data.email} </td>
        <td>${data.typeDocument} </td>
        <td> ${data.numberDocument}</td>
        <td>${data.cuopon} </td>
        <td> ${data.phone} </td>
        <td> ${data.store} </td>
      </tr>
    </table>
      
      </span>
      <div style="Margin: 20px 0px 10px 0px;">
        <span>El equipo de CreviVargas</span>
      </div>
    </div>
  </body>
</html>
        `,
      },
    ],
  });
  request
    .then((result) => {
      console.log("el mail se mandó !!! :D");
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};
