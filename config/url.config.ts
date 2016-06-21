export var BASE_URLS:any;

if(process.env.ENV === 'PROD') {
	// Production
  this.BASE_URLS = {
    "accenture":{
      "basePath":"http://prod.accenture.com/",
      "eserviceResource":{
        "contextRoot":"test"
      },
      "staticResource":{
        "imgBasePath":"http://prod.accenture.com/"
      }
    },
    "petstore":{

    }
  };
} else if(process.env.ENV === 'DEV') {
	// Development
  this.BASE_URLS = {
    "accenture":{
      "basePath":"http://demo4539349.mockable.io/",
      "eserviceResource":{
        "contextRoot":"test"
      },
      "staticResource":{
        "imgBasePath":"http://prod.accenture.com/"
      }
    },
    "petstore":{

    }
  };
} else if(process.env.ENV === 'PORTLET') {

}

// export var BASE_URLS: any = {
//   "accenture":{
//     "basePath":"http://demo4539349.mockable.io/",
//     "eserviceResource":{
//       "contextRoot":"test"
//     }
//   },
//   "petstore":{
//
//   }
// };
