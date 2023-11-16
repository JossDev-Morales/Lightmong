import {
  AuthMechanism,
  AuthMechanismProperties,
  CompressorName,
  ReadConcernLevel,
  WriteConcern,
  WriteConcernSettings,
} from "mongodb";

interface URIOptions {
  /** The name of the application that created this MongoClient instance. MongoDB 3.4 and newer will print this value in the server log upon establishing each connection. It is also recorded in the slow query log and profile collections */
  appName?: string;
  /** Specify the database name associated with the user’s credentials. */
  authSource?: string;
  /** An array or comma-delimited string of compressors to enable network compression for communication between this client and a mongod/mongos instance. */
  compressors?: CompressorName[] | string;
  /** The time in milliseconds to attempt a connection before timing out. */
  connectTimeoutMS?: number;
  /** Allow a driver to force a Single topology type with a connection string containing one host */
  directConnection?: boolean;
  /** heartbeatFrequencyMS controls when the driver checks the state of the MongoDB deployment. Specify the interval (in milliseconds) between checks, counted from the end of the previous check until the beginning of the next one. */
  heartbeatFrequencyMS?: number;
  /**
   * A MongoDB WriteConcern, which describes the level of acknowledgement
   * requested from MongoDB for write operations.
   *
   * @see https://www.mongodb.com/docs/manual/reference/write-concern/
   */
  writeConcern?: WriteConcern | WriteConcernSettings;
  /** Instruct the driver it is connecting to a load balancer fronting a mongos like service */
  loadBalanced?: boolean;
  /** The size (in milliseconds) of the latency window for selecting among multiple suitable MongoDB instances. */
  localThresholdMS?: number;
  /** The maximum number of milliseconds that a connection can remain idle in the pool before being removed and closed. */
  maxIdleTimeMS?: number;
  /** Configures a Socks5 proxy host used for creating TCP connections. */
  proxyHost?: string;
  /** Configures a Socks5 proxy port used for creating TCP connections. */
  proxyPort?: number;
  /** Configures a Socks5 proxy username when the proxy in proxyHost requires username/password authentication. */
  proxyUsername?: string;
  /** Configures a Socks5 proxy password when the proxy in proxyHost requires username/password authentication. */
  proxyPassword?: string;
  /** The level of isolation */
  readConcernLevel?: ReadConcernLevel;
  /** Specifies the read preferences for this connection */
  readPreference?: ReadPreferenceMode | ReadPreference;
  /** Specifies the tags document as a comma-separated list of colon-separated key-value pairs.  */
  readPreferenceTags?: TagSet[];
  /** Specifies the name of the replica set, if the mongod is a member of a replica set. */
  replicaSet?: string;
  /** Enables retryable reads. */
  retryReads?: boolean;
  /** Enable retryable writes. */
  retryWrites?: boolean;
  /** Specifies how long (in milliseconds) to block for server selection before throwing an exception.  */
  serverSelectionTimeoutMS?: number;
  serverSelectionTryOnce?: unknown;
  /** The time in milliseconds to attempt a send or receive on a socket before the attempt times out. */
  socketTimeoutMS?: number;
  /** The maximum number of hosts to connect to when using an srv connection string, a setting of `0` means unlimited hosts */
  srvMaxHosts?: number;
  /**
   * Modifies the srv URI to look like:
   *
   * `_{srvServiceName}._tcp.{hostname}.{domainname}`
   *
   * Querying this DNS URI is expected to respond with SRV records
   */
  srvServiceName?: string;
  /** Enables or disables TLS/SSL for the connection. */
  tls?: boolean;
  /** Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key. */
  tlsCertificateKeyFile?: string;
  /** Specifies the password to de-crypt the tlsCertificateKeyFile. */
  tlsCertificateKeyFilePassword?: string;
  /** Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance. */
  tlsCAFile?: string;
  /** Specifies the location of a local CRL .pem file that contains the client revokation list. */
  tlsCRLFile?: string;
  /** Bypasses validation of the certificates presented by the mongod/mongos instance */
  tlsAllowInvalidCertificates?: boolean;
  /** Disables hostname validation of the certificate presented by the mongod/mongos instance. */
  tlsAllowInvalidHostnames?: boolean;
  /** Disables various certificate validations. */
  tlsInsecure?: boolean;
  /** The maximum time in milliseconds that a thread can wait for a connection to become available. */
  waitQueueTimeoutMS?: number;
  /** An integer that specifies the compression level if using zlib for network compression. */
  zlibCompressionLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined;
}
interface Credential {
  host: string;
  port?: string | number;
  db?: string;
  options?: URIOptions;
}
interface CredentialMDBAWS extends Credential {
  authMechanism: "MONGODB-AWS";
  accesKeyId: string;
  secretAccesKey: string;
}
interface CredentialMDBCR extends Credential {
  authMechanism: "MONGODB-CR";
  username: string;
  password: string;
}
interface CredentialGSSAPI extends Credential {
  authMechanism: "GSSAPI";
  kerberosPrincipal: string;
  authMechanismProperties: AuthMechanismProperties;
}
interface CredentialPLAIN extends Credential {
  authMechanism: "PLAIN";
  username: string;
  password: string;
}
interface CredentialSCRAM_SHA extends Credential {
  authMechanism: "SCRAM-SHA-1" | "SCRAM-SHA-256";
  username: string;
  password: string;
}
interface CredentialMDBX509 extends Credential {
  authMechanism: "MONGODB-X509";
  autoTLS: boolean;
}
type TLSconf = {
  /** Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key. */
  tlsCertificateKeyFile?: string;
  /** Specifies the password to de-crypt the tlsCertificateKeyFile. */
  tlsCertificateKeyFilePassword?: string;
  /** Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance. */
  tlsCAFile?: string;
  /** Specifies the location of a local CRL .pem file that contains the client revokation list. */
  tlsCRLFile?: string;
  /** Bypasses validation of the certificates presented by the mongod/mongos instance */
  tlsAllowInvalidCertificates?: boolean;
  /** Disables hostname validation of the certificate presented by the mongod/mongos instance. */
  tlsAllowInvalidHostnames?: boolean;
  /** Disables various certificate validations. */
  tlsInsecure?: boolean;
};
type securityStatus = "protected" | "non-protected" | "vulnerable";
