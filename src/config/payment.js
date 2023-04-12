function verifyAddress(address) {
        // Make a call to AddressVerify API
        return fetch('https://api.paypal.com/v1/shipping/address/verify/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('AXfMfzIX9YWsDOHpz533ugOeWkqww6o3VY2MdQcbqjsK6cbwfAANdyEN7PCAB-nkibs64AtpwT5IciP6:EDyQrnrAd2aNfWUQrHIZjVQksXyWv-eAjtSg4TxxbDFJJICl4ZJNmKzyh3JHbDZj85ZTvrJFseYdA69z')
          },
          body: JSON.stringify({
            "line1": address.address_line_1,
            "line2": address.address_line_2,
            "city": address.admin_area_2,
            "state": address.admin_area_1,
            "postal_code": address.postal_code,
            "country_code": "US"
          })
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Check the response from the API
          if (data.verification_status === 'SUCCESS') {
            // Address is verified
            return true;
          } else {
            // Address is not verified
            return false;
          }
        })
        .catch(function(error) {
          console.error(error);
          return false;
        });
      }
      