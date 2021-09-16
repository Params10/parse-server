/*
**** GENERATED CODE ****
This code has been generated by resources/buildConfigDefinitions.js
Do not edit manually, but update Options/index.js
*/
var parsers = require('./parsers');

module.exports.ParseServerOptions = {
  accountLockout: {
    env: 'PARSE_SERVER_ACCOUNT_LOCKOUT',
    help: 'The account lockout policy for failed login attempts.',
    action: parsers.objectParser,
  },
  allowClientClassCreation: {
    env: 'PARSE_SERVER_ALLOW_CLIENT_CLASS_CREATION',
    help: 'Enable (or disable) client class creation, defaults to true',
    action: parsers.booleanParser,
    default: true,
  },
  allowCustomObjectId: {
    env: 'PARSE_SERVER_ALLOW_CUSTOM_OBJECT_ID',
    help: 'Enable (or disable) custom objectId',
    action: parsers.booleanParser,
    default: false,
  },
  allowHeaders: {
    env: 'PARSE_SERVER_ALLOW_HEADERS',
    help: 'Add headers to Access-Control-Allow-Headers',
    action: parsers.arrayParser,
  },
  allowOrigin: {
    env: 'PARSE_SERVER_ALLOW_ORIGIN',
    help: 'Sets the origin to Access-Control-Allow-Origin',
  },
  analyticsAdapter: {
    env: 'PARSE_SERVER_ANALYTICS_ADAPTER',
    help: 'Adapter module for the analytics',
    action: parsers.moduleOrObjectParser,
  },
  appId: {
    env: 'PARSE_SERVER_APPLICATION_ID',
    help: 'Your Parse Application ID',
    required: true,
  },
  appName: {
    env: 'PARSE_SERVER_APP_NAME',
    help: 'Sets the app name',
  },
  auth: {
    env: 'PARSE_SERVER_AUTH_PROVIDERS',
    help:
      'Configuration for your authentication providers, as stringified JSON. See http://docs.parseplatform.org/parse-server/guide/#oauth-and-3rd-party-authentication',
    action: parsers.objectParser,
  },
  cacheAdapter: {
    env: 'PARSE_SERVER_CACHE_ADAPTER',
    help: 'Adapter module for the cache',
    action: parsers.moduleOrObjectParser,
  },
  cacheMaxSize: {
    env: 'PARSE_SERVER_CACHE_MAX_SIZE',
    help: 'Sets the maximum size for the in memory cache, defaults to 10000',
    action: parsers.numberParser('cacheMaxSize'),
    default: 10000,
  },
  cacheTTL: {
    env: 'PARSE_SERVER_CACHE_TTL',
    help: 'Sets the TTL for the in memory cache (in ms), defaults to 5000 (5 seconds)',
    action: parsers.numberParser('cacheTTL'),
    default: 5000,
  },
  clientKey: {
    env: 'PARSE_SERVER_CLIENT_KEY',
    help: 'Key for iOS, MacOS, tvOS clients',
  },
  cloud: {
    env: 'PARSE_SERVER_CLOUD',
    help: 'Full path to your cloud code main.js',
  },
  cluster: {
    env: 'PARSE_SERVER_CLUSTER',
    help: 'Run with cluster, optionally set the number of processes default to os.cpus().length',
    action: parsers.numberOrBooleanParser,
  },
  collectionPrefix: {
    env: 'PARSE_SERVER_COLLECTION_PREFIX',
    help: 'A collection prefix for the classes',
    default: '',
  },
  customPages: {
    env: 'PARSE_SERVER_CUSTOM_PAGES',
    help: 'custom pages for password validation and reset',
    action: parsers.objectParser,
    default: {},
  },
  databaseAdapter: {
    env: 'PARSE_SERVER_DATABASE_ADAPTER',
    help: 'Adapter module for the database',
    action: parsers.moduleOrObjectParser,
  },
  databaseOptions: {
    env: 'PARSE_SERVER_DATABASE_OPTIONS',
    help: 'Options to pass to the database client',
    action: parsers.objectParser,
  },
  databaseURI: {
    env: 'PARSE_SERVER_DATABASE_URI',
    help: 'The full URI to your database. Supported databases are mongodb or postgres.',
    required: true,
    default: 'mongodb://localhost:27017/parse',
  },
  directAccess: {
    env: 'PARSE_SERVER_DIRECT_ACCESS',
    help:
      'Set to `true` if Parse requests within the same Node.js environment as Parse Server should be routed to Parse Server directly instead of via the HTTP interface. Default is `false`.<br><br>If set to `false` then Parse requests within the same Node.js environment as Parse Server are executed as HTTP requests sent to Parse Server via the `serverURL`. For example, a `Parse.Query` in Cloud Code is calling Parse Server via a HTTP request. The server is essentially making a HTTP request to itself, unnecessarily using network resources such as network ports.<br><br>\u26A0\uFE0F In environments where multiple Parse Server instances run behind a load balancer and Parse requests within the current Node.js environment should be routed via the load balancer and distributed as HTTP requests among all instances via the `serverURL`, this should be set to `false`.',
    action: parsers.booleanParser,
    default: false,
  },
  dotNetKey: {
    env: 'PARSE_SERVER_DOT_NET_KEY',
    help: 'Key for Unity and .Net SDK',
  },
  emailAdapter: {
    env: 'PARSE_SERVER_EMAIL_ADAPTER',
    help: 'Adapter module for email sending',
    action: parsers.moduleOrObjectParser,
  },
  emailVerifyTokenReuseIfValid: {
    env: 'PARSE_SERVER_EMAIL_VERIFY_TOKEN_REUSE_IF_VALID',
    help:
      'Set to `true` if a email verification token should be reused in case another token is requested but there is a token that is still valid, i.e. has not expired. This avoids the often observed issue that a user requests multiple emails and does not know which link contains a valid token because each newly generated token would invalidate the previous token.<br><br>Default is `false`.<br>Requires option `verifyUserEmails: true`.',
    action: parsers.booleanParser,
    default: false,
  },
  emailVerifyTokenValidityDuration: {
    env: 'PARSE_SERVER_EMAIL_VERIFY_TOKEN_VALIDITY_DURATION',
    help:
      'Set the validity duration of the email verification token in seconds after which the token expires. The token is used in the link that is set in the email. After the token expires, the link becomes invalid and a new link has to be sent. If the option is not set or set to `undefined`, then the token never expires.<br><br>For example, to expire the token after 2 hours, set a value of 7200 seconds (= 60 seconds * 60 minutes * 2 hours).<br><br>Default is `undefined`.<br>Requires option `verifyUserEmails: true`.',
    action: parsers.numberParser('emailVerifyTokenValidityDuration'),
  },
  enableAnonymousUsers: {
    env: 'PARSE_SERVER_ENABLE_ANON_USERS',
    help: 'Enable (or disable) anonymous users, defaults to true',
    action: parsers.booleanParser,
    default: true,
  },
  enableExpressErrorHandler: {
    env: 'PARSE_SERVER_ENABLE_EXPRESS_ERROR_HANDLER',
    help: 'Enables the default express error handler for all errors',
    action: parsers.booleanParser,
    default: false,
  },
  encryptionKey: {
    env: 'PARSE_SERVER_ENCRYPTION_KEY',
    help: 'Key for encrypting your files',
  },
  expireInactiveSessions: {
    env: 'PARSE_SERVER_EXPIRE_INACTIVE_SESSIONS',
    help:
      'Sets whether we should expire the inactive sessions, defaults to true. If false, all new sessions are created with no expiration date.',
    action: parsers.booleanParser,
    default: true,
  },
  fileKey: {
    env: 'PARSE_SERVER_FILE_KEY',
    help: 'Key for your files',
  },
  filesAdapter: {
    env: 'PARSE_SERVER_FILES_ADAPTER',
    help: 'Adapter module for the files sub-system',
    action: parsers.moduleOrObjectParser,
  },
  fileUpload: {
    env: 'PARSE_SERVER_FILE_UPLOAD_OPTIONS',
    help: 'Options for file uploads',
    action: parsers.objectParser,
    default: {},
  },
  graphQLPath: {
    env: 'PARSE_SERVER_GRAPHQL_PATH',
    help: 'Mount path for the GraphQL endpoint, defaults to /graphql',
    default: '/graphql',
  },
  graphQLSchema: {
    env: 'PARSE_SERVER_GRAPH_QLSCHEMA',
    help: 'Full path to your GraphQL custom schema.graphql file',
  },
  host: {
    env: 'PARSE_SERVER_HOST',
    help: 'The host to serve ParseServer on, defaults to 0.0.0.0',
    default: '0.0.0.0',
  },
  idempotencyOptions: {
    env: 'PARSE_SERVER_EXPERIMENTAL_IDEMPOTENCY_OPTIONS',
    help:
      'Options for request idempotency to deduplicate identical requests that may be caused by network issues. Caution, this is an experimental feature that may not be appropriate for production.',
    action: parsers.objectParser,
    default: {},
  },
  javascriptKey: {
    env: 'PARSE_SERVER_JAVASCRIPT_KEY',
    help: 'Key for the Javascript SDK',
  },
  jsonLogs: {
    env: 'JSON_LOGS',
    help: 'Log as structured JSON objects',
    action: parsers.booleanParser,
  },
  liveQuery: {
    env: 'PARSE_SERVER_LIVE_QUERY',
    help: "parse-server's LiveQuery configuration object",
    action: parsers.objectParser,
  },
  liveQueryServerOptions: {
    env: 'PARSE_SERVER_LIVE_QUERY_SERVER_OPTIONS',
    help: 'Live query server configuration options (will start the liveQuery server)',
    action: parsers.objectParser,
  },
  loggerAdapter: {
    env: 'PARSE_SERVER_LOGGER_ADAPTER',
    help: 'Adapter module for the logging sub-system',
    action: parsers.moduleOrObjectParser,
  },
  logLevel: {
    env: 'PARSE_SERVER_LOG_LEVEL',
    help: 'Sets the level for logs',
  },
  logsFolder: {
    env: 'PARSE_SERVER_LOGS_FOLDER',
    help: "Folder for the logs (defaults to './logs'); set to null to disable file based logging",
    default: './logs',
  },
  masterKey: {
    env: 'PARSE_SERVER_MASTER_KEY',
    help: 'Your Parse Master Key',
    required: true,
  },
  masterKeyIps: {
    env: 'PARSE_SERVER_MASTER_KEY_IPS',
    help: 'Restrict masterKey to be used by only these ips, defaults to [] (allow all ips)',
    action: parsers.arrayParser,
    default: [],
  },
  maxLimit: {
    env: 'PARSE_SERVER_MAX_LIMIT',
    help: 'Max value for limit option on queries, defaults to unlimited',
    action: parsers.numberParser('maxLimit'),
  },
  maxLogFiles: {
    env: 'PARSE_SERVER_MAX_LOG_FILES',
    help:
      "Maximum number of logs to keep. If not set, no logs will be removed. This can be a number of files or number of days. If using days, add 'd' as the suffix. (default: null)",
    action: parsers.objectParser,
  },
  maxUploadSize: {
    env: 'PARSE_SERVER_MAX_UPLOAD_SIZE',
    help: 'Max file size for uploads, defaults to 20mb',
    default: '20mb',
  },
  middleware: {
    env: 'PARSE_SERVER_MIDDLEWARE',
    help: 'middleware for express server, can be string or function',
  },
  mountGraphQL: {
    env: 'PARSE_SERVER_MOUNT_GRAPHQL',
    help: 'Mounts the GraphQL endpoint',
    action: parsers.booleanParser,
    default: false,
  },
  mountPath: {
    env: 'PARSE_SERVER_MOUNT_PATH',
    help: 'Mount path for the server, defaults to /parse',
    default: '/parse',
  },
  mountPlayground: {
    env: 'PARSE_SERVER_MOUNT_PLAYGROUND',
    help: 'Mounts the GraphQL Playground - never use this option in production',
    action: parsers.booleanParser,
    default: false,
  },
  objectIdSize: {
    env: 'PARSE_SERVER_OBJECT_ID_SIZE',
    help: "Sets the number of characters in generated object id's, default 10",
    action: parsers.numberParser('objectIdSize'),
    default: 10,
  },
  pages: {
    env: 'PARSE_SERVER_PAGES',
    help:
      'The options for pages such as password reset and email verification. Caution, this is an experimental feature that may not be appropriate for production.',
    action: parsers.objectParser,
    default: {},
  },
  passwordPolicy: {
    env: 'PARSE_SERVER_PASSWORD_POLICY',
    help: 'The password policy for enforcing password related rules.',
    action: parsers.objectParser,
  },
  playgroundPath: {
    env: 'PARSE_SERVER_PLAYGROUND_PATH',
    help: 'Mount path for the GraphQL Playground, defaults to /playground',
    default: '/playground',
  },
  port: {
    env: 'PORT',
    help: 'The port to run the ParseServer, defaults to 1337.',
    action: parsers.numberParser('port'),
    default: 1337,
  },
  preserveFileName: {
    env: 'PARSE_SERVER_PRESERVE_FILE_NAME',
    help: 'Enable (or disable) the addition of a unique hash to the file names',
    action: parsers.booleanParser,
    default: false,
  },
  preventLoginWithUnverifiedEmail: {
    env: 'PARSE_SERVER_PREVENT_LOGIN_WITH_UNVERIFIbanterED_EMAIL',
    help:
      'Set to `true` to prevent a user from logging in if the email has not yet been verified and email verification is required.<br><br>Default is `false`.<br>Requires option `verifyUserEmails: true`.',
    action: parsers.booleanParser,
    default: false,
  },
  protectedFields: {
    env: 'PARSE_SERVER_PROTECTED_FIELDS',
    help: 'Protected fields that should be treated with extra security when fetching details.',
    action: parsers.objectParser,
    default: {
      _User: {
        '*': ['email', 'username'],
      },
    },
  },
  publicServerURL: {
    env: 'PARSE_PUBLIC_SERVER_URL',
    help: 'Public URL to your parse server with http:// or https://.',
  },
  push: {
    env: 'PARSE_SERVER_PUSH',
    help:
      'Configuration for push, as stringified JSON. See http://docs.parseplatform.org/parse-server/guide/#push-notifications',
    action: parsers.objectParser,
  },
  readOnlyMasterKey: {
    env: 'PARSE_SERVER_READ_ONLY_MASTER_KEY',
    help: 'Read-only key, which has the same capabilities as MasterKey without writes',
  },
  restAPIKey: {
    env: 'PARSE_SERVER_REST_API_KEY',
    help: 'Key for REST calls',
  },
  revokeSessionOnPasswordReset: {
    env: 'PARSE_SERVER_REVOKE_SESSION_ON_PASSWORD_RESET',
    help:
      "When a user changes their password, either through the reset password email or while logged in, all sessions are revoked if this is true. Set to false if you don't want to revoke sessions.",
    action: parsers.booleanParser,
    default: true,
  },
  scheduledPush: {
    env: 'PARSE_SERVER_SCHEDULED_PUSH',
    help: 'Configuration for push scheduling, defaults to false.',
    action: parsers.booleanParser,
    default: false,
  },
  security: {
    env: 'PARSE_SERVER_SECURITY',
    help: 'The security options to identify and report weak security settings.',
    action: parsers.objectParser,
    default: {},
  },
  serverCloseComplete: {
    env: 'PARSE_SERVER_SERVER_CLOSE_COMPLETE',
    help: 'Callback when server has closed',
  },
  serverStartComplete: {
    env: 'PARSE_SERVER_SERVER_START_COMPLETE',
    help: 'Callback when server has started',
  },
  serverURL: {
    env: 'PARSE_SERVER_URL',
    help: 'URL to your parse server with http:// or https://.',
    required: true,
  },
  sessionLength: {
    env: 'PARSE_SERVER_SESSION_LENGTH',
    help: 'Session duration, in seconds, defaults to 1 year',
    action: parsers.numberParser('sessionLength'),
    default: 31536000,
  },
  silent: {
    env: 'SILENT',
    help: 'Disables console output',
    action: parsers.booleanParser,
  },
  startLiveQueryServer: {
    env: 'PARSE_SERVER_START_LIVE_QUERY_SERVER',
    help: 'Starts the liveQuery server',
    action: parsers.booleanParser,
  },
  userSensitiveFields: {
    env: 'PARSE_SERVER_USER_SENSITIVE_FIELDS',
    help:
      'Personally identifiable information fields in the user table the should be removed for non-authorized users. Deprecated @see protectedFields',
    action: parsers.arrayParser,
  },
  verbose: {
    env: 'VERBOSE',
    help: 'Set the logging to verbose',
    action: parsers.booleanParser,
  },
  verifyUserEmails: {
    env: 'PARSE_SERVER_VERIFY_USER_EMAILS',
    help:
      'Set to `true` to require users to verify their email address to complete the sign-up process.<br><br>Default is `false`.',
    action: parsers.booleanParser,
    default: false,
  },
  webhookKey: {
    env: 'PARSE_SERVER_WEBHOOK_KEY',
    help: 'Key sent with outgoing webhook calls',
  },
};
module.exports.SecurityOptions = {
  checkGroups: {
    env: 'PARSE_SERVER_SECURITY_CHECK_GROUPS',
    help:
      'The security check groups to run. This allows to add custom security checks or override existing ones. Default are the groups defined in `CheckGroups.js`.',
    action: parsers.arrayParser,
  },
  enableCheck: {
    env: 'PARSE_SERVER_SECURITY_ENABLE_CHECK',
    help: 'Is true if Parse Server should check for weak security settings.',
    action: parsers.booleanParser,
    default: false,
  },
  enableCheckLog: {
    env: 'PARSE_SERVER_SECURITY_ENABLE_CHECK_LOG',
    help:
      'Is true if the security check report should be written to logs. This should only be enabled temporarily to not expose weak security settings in logs.',
    action: parsers.booleanParser,
    default: false,
  },
};
module.exports.PagesOptions = {
  customRoutes: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_ROUTES',
    help: 'The custom routes.',
    action: parsers.arrayParser,
    default: [],
  },
  customUrls: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URLS',
    help: 'The URLs to the custom pages.',
    action: parsers.objectParser,
    default: {},
  },
  enableLocalization: {
    env: 'PARSE_SERVER_PAGES_ENABLE_LOCALIZATION',
    help: 'Is true if pages should be localized; this has no effect on custom page redirects.',
    action: parsers.booleanParser,
    default: false,
  },
  enableRouter: {
    env: 'PARSE_SERVER_PAGES_ENABLE_ROUTER',
    help:
      'Is true if the pages router should be enabled; this is required for any of the pages options to take effect. Caution, this is an experimental feature that may not be appropriate for production.',
    action: parsers.booleanParser,
    default: false,
  },
  forceRedirect: {
    env: 'PARSE_SERVER_PAGES_FORCE_REDIRECT',
    help:
      'Is true if responses should always be redirects and never content, false if the response type should depend on the request type (GET request -> content response; POST request -> redirect response).',
    action: parsers.booleanParser,
    default: false,
  },
  localizationFallbackLocale: {
    env: 'PARSE_SERVER_PAGES_LOCALIZATION_FALLBACK_LOCALE',
    help:
      'The fallback locale for localization if no matching translation is provided for the given locale. This is only relevant when providing translation resources via JSON file.',
    default: 'en',
  },
  localizationJsonPath: {
    env: 'PARSE_SERVER_PAGES_LOCALIZATION_JSON_PATH',
    help:
      'The path to the JSON file for localization; the translations will be used to fill template placeholders according to the locale.',
  },
  pagesEndpoint: {
    env: 'PARSE_SERVER_PAGES_PAGES_ENDPOINT',
    help: "The API endpoint for the pages. Default is 'apps'.",
    default: 'apps',
  },
  pagesPath: {
    env: 'PARSE_SERVER_PAGES_PAGES_PATH',
    help:
      "The path to the pages directory; this also defines where the static endpoint '/apps' points to. Default is the './public/' directory.",
    default: './public',
  },
  placeholders: {
    env: 'PARSE_SERVER_PAGES_PLACEHOLDERS',
    help:
      'The placeholder keys and values which will be filled in pages; this can be a simple object or a callback function.',
    action: parsers.objectParser,
    default: {},
  },
};
module.exports.PagesRoute = {
  handler: {
    env: 'PARSE_SERVER_PAGES_ROUTE_HANDLER',
    help: 'The route handler that is an async function.',
    required: true,
  },
  method: {
    env: 'PARSE_SERVER_PAGES_ROUTE_METHOD',
    help: "The route method, e.g. 'GET' or 'POST'.",
    required: true,
  },
  path: {
    env: 'PARSE_SERVER_PAGES_ROUTE_PATH',
    help: 'The route path.',
    required: true,
  },
};
module.exports.PagesCustomUrlsOptions = {
  emailVerificationLinkExpired: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_EMAIL_VERIFICATION_LINK_EXPIRED',
    help: 'The URL to the custom page for email verification -> link expired.',
  },
  emailVerificationLinkInvalid: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_EMAIL_VERIFICATION_LINK_INVALID',
    help: 'The URL to the custom page for email verification -> link invalid.',
  },
  emailVerificationSendFail: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_EMAIL_VERIFICATION_SEND_FAIL',
    help: 'The URL to the custom page for email verification -> link send fail.',
  },
  emailVerificationSendSuccess: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_EMAIL_VERIFICATION_SEND_SUCCESS',
    help: 'The URL to the custom page for email verification -> resend link -> success.',
  },
  emailVerificationSuccess: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_EMAIL_VERIFICATION_SUCCESS',
    help: 'The URL to the custom page for email verification -> success.',
  },
  passwordReset: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_PASSWORD_RESET',
    help: 'The URL to the custom page for password reset.',
  },
  passwordResetLinkInvalid: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_PASSWORD_RESET_LINK_INVALID',
    help: 'The URL to the custom page for password reset -> link invalid.',
  },
  passwordResetSuccess: {
    env: 'PARSE_SERVER_PAGES_CUSTOM_URL_PASSWORD_RESET_SUCCESS',
    help: 'The URL to the custom page for password reset -> success.',
  },
};
module.exports.CustomPagesOptions = {
  choosePassword: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_CHOOSE_PASSWORD',
    help: 'choose password page path',
  },
  expiredVerificationLink: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_EXPIRED_VERIFICATION_LINK',
    help: 'expired verification link page path',
  },
  invalidLink: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_INVALID_LINK',
    help: 'invalid link page path',
  },
  invalidPasswordResetLink: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_INVALID_PASSWORD_RESET_LINK',
    help: 'invalid password reset link page path',
  },
  invalidVerificationLink: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_INVALID_VERIFICATION_LINK',
    help: 'invalid verification link page path',
  },
  linkSendFail: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_LINK_SEND_FAIL',
    help: 'verification link send fail page path',
  },
  linkSendSuccess: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_LINK_SEND_SUCCESS',
    help: 'verification link send success page path',
  },
  parseFrameURL: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_PARSE_FRAME_URL',
    help: 'for masking user-facing pages',
  },
  passwordResetSuccess: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_PASSWORD_RESET_SUCCESS',
    help: 'password reset success page path',
  },
  verifyEmailSuccess: {
    env: 'PARSE_SERVER_CUSTOM_PAGES_VERIFY_EMAIL_SUCCESS',
    help: 'verify email success page path',
  },
};
module.exports.LiveQueryOptions = {
  classNames: {
    env: 'PARSE_SERVER_LIVEQUERY_CLASSNAMES',
    help: "parse-server's LiveQuery classNames",
    action: parsers.arrayParser,
  },
  pubSubAdapter: {
    env: 'PARSE_SERVER_LIVEQUERY_PUB_SUB_ADAPTER',
    help: 'LiveQuery pubsub adapter',
    action: parsers.moduleOrObjectParser,
  },
  redisOptions: {
    env: 'PARSE_SERVER_LIVEQUERY_REDIS_OPTIONS',
    help: "parse-server's LiveQuery redisOptions",
    action: parsers.objectParser,
  },
  redisURL: {
    env: 'PARSE_SERVER_LIVEQUERY_REDIS_URL',
    help: "parse-server's LiveQuery redisURL",
  },
  wssAdapter: {
    env: 'PARSE_SERVER_LIVEQUERY_WSS_ADAPTER',
    help: 'Adapter module for the WebSocketServer',
    action: parsers.moduleOrObjectParser,
  },
};
module.exports.LiveQueryServerOptions = {
  appId: {
    env: 'PARSE_LIVE_QUERY_SERVER_APP_ID',
    help:
      'This string should match the appId in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same appId.',
  },
  cacheTimeout: {
    env: 'PARSE_LIVE_QUERY_SERVER_CACHE_TIMEOUT',
    help:
      "Number in milliseconds. When clients provide the sessionToken to the LiveQuery server, the LiveQuery server will try to fetch its ParseUser's objectId from parse server and store it in the cache. The value defines the duration of the cache. Check the following Security section and our protocol specification for details, defaults to 5 * 1000 ms (5 seconds).",
    action: parsers.numberParser('cacheTimeout'),
  },
  keyPairs: {
    env: 'PARSE_LIVE_QUERY_SERVER_KEY_PAIRS',
    help:
      'A JSON object that serves as a whitelist of keys. It is used for validating clients when they try to connect to the LiveQuery server. Check the following Security section and our protocol specification for details.',
    action: parsers.objectParser,
  },
  logLevel: {
    env: 'PARSE_LIVE_QUERY_SERVER_LOG_LEVEL',
    help:
      'This string defines the log level of the LiveQuery server. We support VERBOSE, INFO, ERROR, NONE, defaults to INFO.',
  },
  masterKey: {
    env: 'PARSE_LIVE_QUERY_SERVER_MASTER_KEY',
    help:
      'This string should match the masterKey in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same masterKey.',
  },
  port: {
    env: 'PARSE_LIVE_QUERY_SERVER_PORT',
    help: 'The port to run the LiveQuery server, defaults to 1337.',
    action: parsers.numberParser('port'),
    default: 1337,
  },
  pubSubAdapter: {
    env: 'PARSE_LIVE_QUERY_SERVER_PUB_SUB_ADAPTER',
    help: 'LiveQuery pubsub adapter',
    action: parsers.moduleOrObjectParser,
  },
  redisOptions: {
    env: 'PARSE_LIVE_QUERY_SERVER_REDIS_OPTIONS',
    help: "parse-server's LiveQuery redisOptions",
    action: parsers.objectParser,
  },
  redisURL: {
    env: 'PARSE_LIVE_QUERY_SERVER_REDIS_URL',
    help: "parse-server's LiveQuery redisURL",
  },
  serverURL: {
    env: 'PARSE_LIVE_QUERY_SERVER_SERVER_URL',
    help:
      'This string should match the serverURL in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same serverURL.',
  },
  websocketTimeout: {
    env: 'PARSE_LIVE_QUERY_SERVER_WEBSOCKET_TIMEOUT',
    help:
      'Number of milliseconds between ping/pong frames. The WebSocket server sends ping/pong frames to the clients to keep the WebSocket alive. This value defines the interval of the ping/pong frame from the server to clients, defaults to 10 * 1000 ms (10 s).',
    action: parsers.numberParser('websocketTimeout'),
  },
  wssAdapter: {
    env: 'PARSE_LIVE_QUERY_SERVER_WSS_ADAPTER',
    help: 'Adapter module for the WebSocketServer',
    action: parsers.moduleOrObjectParser,
  },
};
module.exports.IdempotencyOptions = {
  paths: {
    env: 'PARSE_SERVER_EXPERIMENTAL_IDEMPOTENCY_PATHS',
    help:
      'An array of paths for which the feature should be enabled. The mount path must not be included, for example instead of `/parse/functions/myFunction` specifiy `functions/myFunction`. The entries are interpreted as regular expression, for example `functions/.*` matches all functions, `jobs/.*` matches all jobs, `classes/.*` matches all classes, `.*` matches all paths.',
    action: parsers.arrayParser,
    default: [],
  },
  ttl: {
    env: 'PARSE_SERVER_EXPERIMENTAL_IDEMPOTENCY_TTL',
    help:
      'The duration in seconds after which a request record is discarded from the database, defaults to 300s.',
    action: parsers.numberParser('ttl'),
    default: 300,
  },
};
module.exports.AccountLockoutOptions = {
  duration: {
    env: 'PARSE_SERVER_ACCOUNT_LOCKOUT_DURATION',
    help:
      'Set the duration in minutes that a locked-out account remains locked out before automatically becoming unlocked.<br><br>Valid values are greater than `0` and less than `100000`.',
    action: parsers.numberParser('duration'),
  },
  threshold: {
    env: 'PARSE_SERVER_ACCOUNT_LOCKOUT_THRESHOLD',
    help:
      'Set the number of failed sign-in attempts that will cause a user account to be locked. If the account is locked. The account will unlock after the duration set in the `duration` option has passed and no further login attempts have been made.<br><br>Valid values are greater than `0` and less than `1000`.',
    action: parsers.numberParser('threshold'),
  },
  unlockOnPasswordReset: {
    env: 'PARSE_SERVER_ACCOUNT_LOCKOUT_UNLOCK_ON_PASSWORD_RESET',
    help:
      'Set to `true`  if the account should be unlocked after a successful password reset.<br><br>Default is `false`.<br>Requires options `duration` and `threshold` to be set.',
    action: parsers.booleanParser,
    default: false,
  },
};
module.exports.PasswordPolicyOptions = {
  doNotAllowUsername: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_DO_NOT_ALLOW_USERNAME',
    help:
      'Set to `true` to disallow the username as part of the password.<br><br>Default is `false`.',
    action: parsers.booleanParser,
    default: false,
  },
  maxPasswordAge: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_MAX_PASSWORD_AGE',
    help:
      'Set the number of days after which a password expires. Login attempts fail if the user does not reset the password before expiration.',
    action: parsers.numberParser('maxPasswordAge'),
  },
  maxPasswordHistory: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_MAX_PASSWORD_HISTORY',
    help:
      'Set the number of previous password that will not be allowed to be set as new password. If the option is not set or set to `0`, no previous passwords will be considered.<br><br>Valid values are >= `0` and <= `20`.<br>Default is `0`.',
    action: parsers.numberParser('maxPasswordHistory'),
  },
  resetTokenReuseIfValid: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_RESET_TOKEN_REUSE_IF_VALID',
    help:
      'Set to `true` if a password reset token should be reused in case another token is requested but there is a token that is still valid, i.e. has not expired. This avoids the often observed issue that a user requests multiple emails and does not know which link contains a valid token because each newly generated token would invalidate the previous token.<br><br>Default is `false`.',
    action: parsers.booleanParser,
    default: false,
  },
  resetTokenValidityDuration: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_RESET_TOKEN_VALIDITY_DURATION',
    help:
      'Set the validity duration of the password reset token in seconds after which the token expires. The token is used in the link that is set in the email. After the token expires, the link becomes invalid and a new link has to be sent. If the option is not set or set to `undefined`, then the token never expires.<br><br>For example, to expire the token after 2 hours, set a value of 7200 seconds (= 60 seconds * 60 minutes * 2 hours).<br><br>Default is `undefined`.',
    action: parsers.numberParser('resetTokenValidityDuration'),
  },
  validationError: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_VALIDATION_ERROR',
    help:
      'Set the error message to be sent.<br><br>Default is `Password does not meet the Password Policy requirements.`',
  },
  validatorCallback: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_VALIDATOR_CALLBACK',
    help:
      'Set a callback function to validate a password to be accepted.<br><br>If used in combination with `validatorPattern`, the password must pass both to be accepted.',
  },
  validatorPattern: {
    env: 'PARSE_SERVER_PASSWORD_POLICY_VALIDATOR_PATTERN',
    help:
      'Set the regular expression validation pattern a password must match to be accepted.<br><br>If used in combination with `validatorCallback`, the password must pass both to be accepted.',
  },
};
module.exports.FileUploadOptions = {
  enableForAnonymousUser: {
    env: 'PARSE_SERVER_FILE_UPLOAD_ENABLE_FOR_ANONYMOUS_USER',
    help: 'Is true if file upload should be allowed for anonymous users.',
    action: parsers.booleanParser,
    default: false,
  },
  enableForAuthenticatedUser: {
    env: 'PARSE_SERVER_FILE_UPLOAD_ENABLE_FOR_AUTHENTICATED_USER',
    help: 'Is true if file upload should be allowed for authenticated users.',
    action: parsers.booleanParser,
    default: true,
  },
  enableForPublic: {
    env: 'PARSE_SERVER_FILE_UPLOAD_ENABLE_FOR_PUBLIC',
    help: 'Is true if file upload should be allowed for anyone, regardless of user authentication.',
    action: parsers.booleanParser,
    default: false,
  },
};
module.exports.DatabaseOptions = {
  enableSchemaHooks: {
    env: 'PARSE_SERVER_DATABASE_ENABLE_SCHEMA_HOOKS',
    help:
      'Enables database real-time hooks to update single schema cache. Set to `true` if using multiple Parse Servers instances connected to the same database. Failing to do so will cause a schema change to not propagate to all instances and re-syncing will only happen when the instances restart. To use this feature with MongoDB, a replica set cluster with [change stream](https://docs.mongodb.com/manual/changeStreams/#availability) support is required.',
    action: parsers.booleanParser,
    default: false,
  },
};
