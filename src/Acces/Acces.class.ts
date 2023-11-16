import {Credential, CredentialGSSAPI, CredentialMDBAWS, CredentialMDBCR, CredentialMDBX509, CredentialPLAIN, CredentialSCRAM_SHA, securityStatus } from "../../typeDeclarations/Acces/Acces.class"

class Acces{
    public credential:CredentialMDBAWS|CredentialMDBCR|CredentialGSSAPI|CredentialPLAIN|CredentialSCRAM_SHA|CredentialMDBX509
    constructor(credential:CredentialMDBAWS|CredentialMDBCR|CredentialGSSAPI|CredentialPLAIN|CredentialSCRAM_SHA|CredentialMDBX509){
        this.credential=credential
    }
    public securityStatus():securityStatus{
        if(this.credential.options?.tls){
            return 'protected'
        }
        return 'non-protected'
    }
}
new Acces({authMechanism:'GSSAPI',authMechanismProperties:{},host:'',kerberosPrincipal:'',options:{compressors:['none'],writeConcern:{}}})

new Acces({authMechanism:'SCRAM-SHA-1',host:'',password:'',username:''}).securityStatus()

