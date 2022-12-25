const Mailjet = require ('node-mailjet')
const { MailjetApiConfig } = require("../../config");

const mailjet = Mailjet.apiConnect(
  MailjetApiConfig.ApiKey,
  MailjetApiConfig.ApiSecret
);





const sendEmail = (recipient, subject, html) => {
  

  return new Promise((resolve, reject) => {
    mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "gowrishankar@sightspectrum.com",
                Name: "Mailjet Pilot"
              },
              To: [
                {
                  Email: recipient,
                  Name: "passenger 1"
                }
              ],
              Subject: subject,
              TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
              HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
          ]
        }).then((data) => {
          console.log("Email sent",data.response.data.Messages[0].To);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
          console.error(error);
        });
    
  });
};

module.exports = {
  sendEmail
};
