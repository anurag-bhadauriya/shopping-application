/*
 * This is a service class used across all the components
 * 
 * this provides the url for server side applications to all the 
 * http calls in the service classes
 *
 * 
 */
export class UriService {

    /** userMicroServiceUri properties */
    userMicroServiceUri = {
        protocol: 'https',
        host: "localhost" /* 'vjeemys-09'  */ ,
        port: '3000',
        applicationName: 'user'
    };

    microServiceUri = {
        protocol: 'https',
        host: 'localhost',
        port: '3000'
    }
   
    buildUserMicroServiceUri() {
        return this.userMicroServiceUri.protocol + 
            "://" + this.userMicroServiceUri.host + 
            ":" + this.userMicroServiceUri.port + 
            "/" + this.userMicroServiceUri.applicationName+"/";
    }

    buildMicroServiceUri() {
        return this.microServiceUri.protocol +
            "://" + this.microServiceUri.host +
            ":" + this.microServiceUri.port + '/';
    }
}