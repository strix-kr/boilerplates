import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** RFC3339 date-time: 2016-01-01T13:10:20Z */
  DateTime: any;
  /** JSON string */
  JSON: any;
  /** RFC3339 full-date: 2007-12-03 */
  Date: any;
  /** multipart/form-data binary file */
  Upload: any;
  /** RFC3339 full-time: 13:10:20Z */
  Time: any;
};

/** 데이터를 조회하는 필드 엔트리 */
export type Query = {
   __typename?: 'Query';
  /** 전역 식별자(URN 포맷 urn:kebab-cased-type-name:xxx)로 고유한 자원을 조회 */
  node: Node;
  /** 내부용 */
  admin: AdminQuery;
  pm?: Maybe<PmQuery>;
  dr?: Maybe<DrQuery>;
  /**  통합모니터링 root query  */
  trade?: Maybe<TradeQuery>;
};


/** 데이터를 조회하는 필드 엔트리 */
export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/**
 * 전체 시스템에서 고유한 엔티티
 * 
 * 인자 id 는 urn:type-name:id-of-given-type 포맷을 따릅니다.
 * eg. urn:file:file-id, urn:user:user-id
 * 
 * 인터페이스 ref: https://graphql.github.io/learn/schema/#interfaces
 */
export type Node = {
  id: Scalars['ID'];
};

/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQuery = {
   __typename?: 'AdminQuery';
  /** 게이트웨이 노드 ID */
  gatewayNodeID: Scalars['ID'];
  /** 현재 인증된 관리자 */
  viewer: IamAdmin;
  /** IAM 쿼리 엔트리 */
  iam: IamQuery;
  /** test 쿼리 엔트리 */
  test: TestQuery;
  node: MolNode;
  nodes: Array<MolNode>;
  service: MolService;
  services: Array<MolService>;
  action: MolAction;
  actions: Array<MolAction>;
  traces: Array<MolApiRequestTrace>;
  emissions: Array<MolEventEmission>;
  /** grouped analysis of traces for all the actions */
  tracesAnalysis: MolApiRequestTracesAnalysis;
  /** a list of grouped analysis of traces for all the actions */
  tracesAnalysisSeries: Array<MolApiRequestTracesAnalysis>;
  /** each analysis of traces for all the actions */
  tracesAnalysisList: Array<MolApiRequestTracesAnalysis>;
  document: AdminDocument;
  documents: Array<AdminDocument>;
  i18n: MolApIi18nQuery;
  file: FileQuery;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryNodeArgs = {
  id: Scalars['ID'];
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryNodesArgs = {
  hasService?: Maybe<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryServiceArgs = {
  name?: Maybe<Scalars['String']>;
  hasAction?: Maybe<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryServicesArgs = {
  namePattern?: Maybe<Scalars['String']>;
  subscribedEvent?: Maybe<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryActionArgs = {
  name: Scalars['String'];
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryActionsArgs = {
  namePattern?: Maybe<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryTracesArgs = {
  requestID?: Maybe<Scalars['ID']>;
  actionPattern?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryEmissionsArgs = {
  eventPattern?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryTracesAnalysisArgs = {
  hours?: Maybe<Scalars['Int']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryTracesAnalysisSeriesArgs = {
  hours: Array<Scalars['Int']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryTracesAnalysisListArgs = {
  hours?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  asc?: Maybe<Scalars['Boolean']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryDocumentArgs = {
  id: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 쿼리 (내부용) */
export type AdminQueryDocumentsArgs = {
  id?: Maybe<Scalars['String']>;
};

/** IAM 관리자 (GSuite) */
export type IamAdmin = {
   __typename?: 'IAMAdmin';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  photoURL?: Maybe<Scalars['String']>;
};

export type IamQuery = {
   __typename?: 'IAMQuery';
  /** 인증 토큰으로부터 IAM 유저를 조회 */
  viewer?: Maybe<IamUser>;
  /** IAM 유저를 조회 */
  get: IamUser;
  /** IAM 유저 목록을 조회 */
  list: IamUserList;
};


export type IamQueryGetArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  withDisabled?: Scalars['Boolean'];
};


export type IamQueryListArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
  withDisabled?: Scalars['Boolean'];
};

/** IAM 통합 계정의 모든 정보를 포함하는 유저 타입 */
export type IamUser = Node & User & {
   __typename?: 'IAMUser';
  id: Scalars['ID'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  clientClaims: Scalars['JSON'];
};

/** 모든 유저 타입의 공통 인터페이스 */
export type User = {
  id: Scalars['ID'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  disabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
};



/** IAM 유저 목록 */
export type IamUserList = {
   __typename?: 'IAMUserList';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<IamUser>;
};

/**  IAM test 클라이언트 쿼리 (예시) */
export type TestQuery = {
   __typename?: 'TestQuery';
  /** 인증 토큰으로부터 Test 유저를 조회 */
  viewer?: Maybe<TestUser>;
  /** Test 유저를 조회 */
  get: TestUser;
  /** Test 유저 목록을 조회 */
  list: TestUserList;
};


/**  IAM test 클라이언트 쿼리 (예시) */
export type TestQueryGetArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};


/**  IAM test 클라이언트 쿼리 (예시) */
export type TestQueryListArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};

/**  IAM test 클라이언트의 유저 정보 */
export type TestUser = Node & User & {
   __typename?: 'TestUser';
  id: Scalars['ID'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  note?: Maybe<Scalars['JSON']>;
  role: Scalars['String'];
  point: Scalars['Int'];
  homepage?: Maybe<Scalars['String']>;
};

/** Test 유저 목록 */
export type TestUserList = {
   __typename?: 'TestUserList';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<TestUser>;
};

/** Moleculer node */
export type MolNode = {
   __typename?: 'MolNode';
  id: Scalars['ID'];
  client: MolNodeClient;
  hostname: Scalars['String'];
  ipList: Array<Scalars['String']>;
  services: Array<MolService>;
  lastHeartbeatAt: Scalars['DateTime'];
  status?: Maybe<MolNodeStatus>;
};

export type MolNodeClient = {
   __typename?: 'MolNodeClient';
  type: Scalars['String'];
  version: Scalars['String'];
  langVersion: Scalars['String'];
};

/** Moleculer service */
export type MolService = {
   __typename?: 'MolService';
  /** raw schema */
  schema: Scalars['JSON'];
  /** identifier */
  name: Scalars['String'];
  /** named version of service */
  version?: Maybe<Scalars['String']>;
  /** description of service */
  description?: Maybe<Scalars['String']>;
  /** git repository url */
  repository?: Maybe<Scalars['String']>;
  /** defined actions */
  actions: Array<MolAction>;
  /** subscribed events */
  events: Array<MolEventSubscription>;
  /** nodes where the service is running on */
  nodes: Array<MolNode>;
  /** an analysis of traces for the service actions */
  tracesAnalysis: MolApiRequestTracesAnalysis;
  /** a list of grouped analysis of traces for all the actions */
  tracesAnalysisSeries: Array<MolApiRequestTracesAnalysis>;
  /** each analyses of traces for all the actions */
  tracesAnalysisList: Array<MolApiRequestTracesAnalysis>;
  /** public API configuration version */
  apiVersion?: Maybe<Scalars['String']>;
  /** GraphQL type definitions */
  apiGraphQLTypeDefs: Array<MolServiceGraphQlTypeDef>;
  apiHasGraphQL: Scalars['Boolean'];
  /** REST endpoint definitions */
  apiRESTAliasDefs: Array<MolServiceRestAliasDef>;
  apiHasREST: Scalars['Boolean'];
};


/** Moleculer service */
export type MolServiceTracesAnalysisArgs = {
  hours?: Maybe<Scalars['Int']>;
};


/** Moleculer service */
export type MolServiceTracesAnalysisSeriesArgs = {
  hours: Array<Scalars['Int']>;
};


/** Moleculer service */
export type MolServiceTracesAnalysisListArgs = {
  hours?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  asc?: Maybe<Scalars['Boolean']>;
};

/** Moleculer action */
export type MolAction = {
   __typename?: 'MolAction';
  name: Scalars['String'];
  rawName: Scalars['String'];
  visibility: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  cache?: Maybe<Scalars['JSON']>;
  params?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  stream: Scalars['Boolean'];
  /** service */
  service: MolService;
  /** examples */
  traces: Array<MolApiRequestTrace>;
  /** an analysis of traces for the action */
  tracesAnalysis: MolApiRequestTracesAnalysis;
  /** a list of analysis of traces for the action */
  tracesAnalysisSeries: Array<MolApiRequestTracesAnalysis>;
};


/** Moleculer action */
export type MolActionTracesArgs = {
  limit?: Maybe<Scalars['Int']>;
  balanced?: Maybe<Scalars['Boolean']>;
};


/** Moleculer action */
export type MolActionTracesAnalysisArgs = {
  hours?: Maybe<Scalars['Int']>;
};


/** Moleculer action */
export type MolActionTracesAnalysisSeriesArgs = {
  hours: Array<Scalars['Int']>;
};

/** Moleculer API gateway request trace (persisted in DB) */
export type MolApiRequestTrace = {
   __typename?: 'MolAPIRequestTrace';
  id: Scalars['ID'];
  gatewayNodeID: Scalars['ID'];
  requestID: Scalars['ID'];
  contextID: Scalars['ID'];
  parentContextID?: Maybe<Scalars['ID']>;
  nodeID: Scalars['ID'];
  level: Scalars['Int'];
  action: Scalars['String'];
  params?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  data?: Maybe<Scalars['JSON']>;
  error?: Maybe<Scalars['JSON']>;
  duration: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  children: Array<MolApiRequestTrace>;
};

export type MolApiRequestTracesAnalysis = {
   __typename?: 'MolAPIRequestTracesAnalysis';
  action: Scalars['String'];
  service?: Maybe<Scalars['String']>;
  callCount: Scalars['Float'];
  errorCount: Scalars['Float'];
  errorRate: Scalars['Float'];
  /** error.code >= 500 */
  internalErrorCount: Scalars['Float'];
  internalErrorRate: Scalars['Float'];
  avgDuration: Scalars['Int'];
  minDuration: Scalars['Int'];
  maxDuration: Scalars['Int'];
  /** totalDuration = avgDuration * callCount */
  totalDuration: Scalars['Float'];
  from: Scalars['DateTime'];
  hours: Scalars['Int'];
  hourlyCallCount: Scalars['Float'];
  hourlyErrorCount: Scalars['Float'];
  hourlyInternalErrorCount: Scalars['Float'];
  /** hourlyDuration = avgDuration * callCount / hours */
  hourlyDuration: Scalars['Float'];
};

/** Moleculer event Subscription of service */
export type MolEventSubscription = {
   __typename?: 'MolEventSubscription';
  event: Scalars['String'];
  group: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  emissions: Array<MolEventEmission>;
};


/** Moleculer event Subscription of service */
export type MolEventSubscriptionEmissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** Moleculer event emission from service (persisted in DB) */
export type MolEventEmission = {
   __typename?: 'MolEventEmission';
  id: Scalars['ID'];
  gatewayNodeID: Scalars['ID'];
  event: Scalars['String'];
  payload?: Maybe<Scalars['JSON']>;
  group?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  subscribers: Array<MolService>;
};

/** service public API definition */
export type MolServiceGraphQlTypeDef = {
   __typename?: 'MolServiceGraphQLTypeDef';
  service: MolService;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  source: Scalars['String'];
  hasNodeResolver: Scalars['Boolean'];
  hasTypeResolver: Scalars['Boolean'];
  resolver: Scalars['JSON'];
  actionFields: Array<MolServiceGraphQlActionFieldDef>;
};

export type MolServiceGraphQlActionFieldDef = {
   __typename?: 'MolServiceGraphQLActionFieldDef';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  action: Scalars['String'];
  resolver: Scalars['JSON'];
  guards: Array<Scalars['String']>;
  paramMappings?: Maybe<Scalars['JSON']>;
};

export type MolServiceRestAliasDef = {
   __typename?: 'MolServiceRESTAliasDef';
  service: MolService;
  path: Scalars['String'];
  method: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  action: Scalars['String'];
  guards: Array<Scalars['String']>;
  paramMappings?: Maybe<Scalars['JSON']>;
};

export type MolNodeStatus = {
   __typename?: 'MolNodeStatus';
  uptimeSeconds: Scalars['Int'];
  cpuTotal: Scalars['Float'];
  cpuLoad1: Scalars['Float'];
  cpuLoad5: Scalars['Float'];
  cpuLoad15: Scalars['Float'];
  cpuPercent: Scalars['Int'];
  memTotalBytes: Scalars['Float'];
  memLoadBytes: Scalars['Float'];
  memFreeBytes: Scalars['Float'];
  memPercent: Scalars['Int'];
  sentPackets: Scalars['Int'];
  sentBytes: Scalars['Int'];
  receivedPackets: Scalars['Int'];
  receivedBytes: Scalars['Int'];
};

/** 관리자 문서 */
export type AdminDocument = {
   __typename?: 'AdminDocument';
  id: Scalars['ID'];
  version: Scalars['String'];
  prevDocument?: Maybe<AdminDocument>;
  allDocuments: Array<AdminDocument>;
  diff: Scalars['JSON'];
  author?: Maybe<IamAdmin>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
};


/** 관리자 문서 */
export type AdminDocumentDiffArgs = {
  version?: Maybe<Scalars['String']>;
};

export type MolApIi18nQuery = {
   __typename?: 'MolAPIi18nQuery';
  validationErrors: Array<MolApiValidationError>;
};


export type MolApIi18nQueryValidationErrorsArgs = {
  lang?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  actionPattern?: Maybe<Scalars['String']>;
  fieldPattern?: Maybe<Scalars['String']>;
};

export type MolApiValidationError = {
   __typename?: 'MolAPIValidationError';
  id: Scalars['ID'];
  lang: Scalars['String'];
  type: Scalars['String'];
  actionPattern: Scalars['String'];
  fieldPattern: Scalars['String'];
  message: Scalars['String'];
};

export type FileQuery = {
   __typename?: 'FileQuery';
  /** 파일 조회 */
  get: File;
  /** 파일 목록 조회 */
  list: FileList;
};


export type FileQueryGetArgs = {
  id: Scalars['ID'];
};


export type FileQueryListArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
};

/** 파일 */
export type File = Node & {
   __typename?: 'File';
  id: Scalars['ID'];
  name: Scalars['String'];
  contentType: Scalars['String'];
  tags: Scalars['JSON'];
  isPrivate: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  byteSize: Scalars['Int'];
  size: Scalars['String'];
  url: Scalars['String'];
};


/** 파일 */
export type FileUrlArgs = {
  expiryHours?: Maybe<Scalars['Int']>;
  download?: Maybe<Scalars['Boolean']>;
};

/** 파일 목록 */
export type FileList = {
   __typename?: 'FileList';
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  hasMore: Scalars['Boolean'];
  entries: Array<File>;
};

/**  PM root query  */
export type PmQuery = {
   __typename?: 'PmQuery';
  /**  My Info  */
  my: PmMyQuery;
  /**  인증 토큰으로부터 유저 조회  */
  viewer?: Maybe<PmUser>;
  /**  유저 조회  */
  user: PmUser;
  /** 유저 목록 조회 */
  users: PmUserlist;
  servicePlanList?: Maybe<Array<Maybe<PmServicePlan>>>;
  notiConfigList: Array<PmGlobalNotiConfig>;
  /**  Get Contracts list  */
  getContractList?: Maybe<PmContractList>;
  getKepco: PmKepco;
  /**  Get list of kepco records  */
  getKepcoList?: Maybe<PmKepcoList>;
  /**  Get list of my reports  */
  reports: PmAnalysisReportList;
  /**  Get report details  */
  reportDetail?: Maybe<PmAnalysisReport>;
};


/**  PM root query  */
export type PmQueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};


/**  PM root query  */
export type PmQueryUsersArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


/**  PM root query  */
export type PmQueryGetContractListArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


/**  PM root query  */
export type PmQueryGetKepcoArgs = {
  id?: Maybe<Scalars['ID']>;
};


/**  PM root query  */
export type PmQueryGetKepcoListArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


/**  PM root query  */
export type PmQueryReportsArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


/**  PM root query  */
export type PmQueryReportDetailArgs = {
  id: Scalars['Int'];
};

/**  My Data  */
export type PmMyQuery = {
   __typename?: 'PmMyQuery';
  /**
   *  dummy 
   * @deprecated Not meant for use!
   */
  dummy?: Maybe<Scalars['JSON']>;
  /**  My user info  */
  info: PmUser;
  kepcoList: Array<PmKepco>;
  /**  My Contracts list  */
  contracts: Array<Maybe<PmContract>>;
  /**  My specific contract  */
  contract?: Maybe<PmContract>;
};


/**  My Data  */
export type PmMyQueryContractArgs = {
  id: Scalars['ID'];
};

/**  PM 유저  */
export type PmUser = Node & User & {
   __typename?: 'PmUser';
  id: Scalars['ID'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** +82 국제 코드를 제외한 전화번호 */
  phoneClean?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  disabled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  role?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  /**  True if this is currently logged in user  */
  isMe?: Maybe<Scalars['Boolean']>;
  all2?: Maybe<Scalars['JSON']>;
};

export type PmKepco = Node & PmKcust & {
   __typename?: 'PmKepco';
  id: Scalars['ID'];
  /**  shorthand for kepco_code  */
  code: Scalars['ID'];
  kepcoCode: Scalars['ID'];
  name: Scalars['String'];
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
  parentKepco?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryDetail?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  /**  한전 계약용량  */
  capacity?: Maybe<Scalars['Float']>;
  /**  한전 요금적용전력  */
  appliedPower?: Maybe<Scalars['Float']>;
  /**  한전 요금제명  */
  planName?: Maybe<Scalars['String']>;
  /**  Lat/lng as Object (derived)  */
  latlng?: Maybe<Scalars['JSON']>;
  /**  Get list of my reports  */
  reports?: Maybe<Scalars['JSON']>;
  smartMetersEims?: Maybe<Array<Maybe<PmSmartMeterEims>>>;
  reportDetail?: Maybe<PmAnalysisReport>;
};


export type PmKepcoReportsArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


export type PmKepcoReportDetailArgs = {
  id: Scalars['Int'];
};

/**  Interface for Kepco customer info  */
export type PmKcust = {
  id: Scalars['ID'];
  kepcoCode: Scalars['ID'];
  name: Scalars['String'];
  parentKepco?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  smartMetersEims?: Maybe<Array<Maybe<PmSmartMeter>>>;
};

export type PmSmartMeter = {
  id: Scalars['ID'];
  serialNo?: Maybe<Scalars['ID']>;
};

export type PmSmartMeterEims = PmSmartMeter & {
   __typename?: 'PmSmartMeterEims';
  id: Scalars['ID'];
  serialNo: Scalars['ID'];
  /**  해당 참여고객 한전고객번호  */
  kepcoCode?: Maybe<Scalars['ID']>;
  /**  해당 DR 참여고객 id  */
  drContractId?: Maybe<Scalars['ID']>;
  /** 장비업체 코드 */
  manufacturer?: Maybe<Scalars['String']>;
  /**  장비업체 명 */
  manufacturerText?: Maybe<Scalars['String']>;
  /**  계량기 설정변수 CT  */
  ct?: Maybe<Scalars['Int']>;
  /**  계량기 설정변수 PT  */
  pt?: Maybe<Scalars['Int']>;
  /**  계량기 설정변수 kW/p  */
  kwp?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

/** pm analysis report */
export type PmAnalysisReport = {
   __typename?: 'PmAnalysisReport';
  id: Scalars['ID'];
  /** contractId that it belongs to */
  contractId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  typeText?: Maybe<PmAnalysisReportType>;
  /** report type */
  type?: Maybe<Scalars['String']>;
  /** result json object */
  result?: Maybe<Scalars['JSON']>;
  /** shortcut to result.status */
  resultStatus?: Maybe<Scalars['String']>;
  /** shortcut to result.reason */
  resultReason?: Maybe<Scalars['String']>;
  /**  한전 고객정보 Crawling 당시 값  */
  kepcoInfo?: Maybe<Scalars['JSON']>;
  kepcoName?: Maybe<Scalars['String']>;
  /**  한전 계약용량 | Crawling 당시 값  */
  kepcoCapacity?: Maybe<Scalars['Float']>;
  /**  한전 요금적용전력 | Crawling 당시 값  */
  kepcoAppliedPower?: Maybe<Scalars['Float']>;
  /**  한전 요금제 | Crawling 당시 값  */
  kepcoPlanName?: Maybe<Scalars['String']>;
  kepcoPlan?: Maybe<PmKepcoPlan>;
  /**  한전 고객명 | Crawling 당시 값  */
  createdBy?: Maybe<PmUser>;
  createdUserName?: Maybe<Scalars['String']>;
  annotations?: Maybe<Scalars['JSON']>;
  kepcoCode: Scalars['String'];
  datasetAvailable?: Maybe<Scalars['Boolean']>;
};


export enum PmAnalysisReportType {
  Free = 'FREE',
  Premium = 'PREMIUM',
  Deluxe = 'DELUXE'
}

export type PmKepcoPlan = {
   __typename?: 'PmKepcoPlan';
  /** internal identification of kepco tariffs */
  id: Scalars['Int'];
  name: Scalars['String'];
  /** 기본요금단가 */
  demandTariff?: Maybe<Scalars['Float']>;
  tariffByPeaks?: Maybe<Array<Maybe<PmKepcoPlanTariff>>>;
};

export type PmKepcoPlanTariff = {
   __typename?: 'PmKepcoPlanTariff';
  /** internal identification of kepco detailed tariffs */
  id: Scalars['Int'];
  /** Level of Peak: (off-peak/mid-peak/on-peak) */
  peakLevel?: Maybe<Scalars['String']>;
  /** 여름철 */
  tariffSummer?: Maybe<Scalars['Float']>;
  /** 봄/가을철 */
  tariffSpringFall?: Maybe<Scalars['Float']>;
  /** 겨울철 */
  tariffWinter?: Maybe<Scalars['Float']>;
};

export type PmContract = {
   __typename?: 'PmContract';
  id: Scalars['ID'];
  kepcoCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  kepcoInfo?: Maybe<PmKepco>;
  /** group ref code for new signups */
  refCode?: Maybe<Scalars['String']>;
  /** 연결된 아임스 참여고객 ID */
  eimsContractId?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Count of currently active service plans */
  planCnt?: Maybe<Scalars['Int']>;
  /** List of ids of currently active service plans */
  planIds?: Maybe<Scalars['String']>;
  /** 가장 높은 상품 ID 번호 상품 아이디가 높을 수록 볼 수 있는 페이지가 많음 */
  planIdMax?: Maybe<Scalars['Int']>;
  /** List of users belonging to this contract */
  users?: Maybe<Array<Maybe<PmUser>>>;
  /** List of child kcusts assosiated */
  children?: Maybe<Array<Maybe<PmContractChildKepco>>>;
  notiConfigList: Array<PmContractNotiConfig>;
  wattThresholdList: Array<Maybe<PmContractWattThreshold>>;
  activeServicePlans: Array<Maybe<PmContractServicePlan>>;
  alertLogs?: Maybe<PmNotiList>;
  getPowerLoad?: Maybe<Scalars['JSON']>;
  getPowerForecast?: Maybe<Scalars['JSON']>;
};


export type PmContractActiveServicePlansArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  pastRecords?: Maybe<Scalars['Boolean']>;
};


export type PmContractAlertLogsArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
};


export type PmContractGetPowerLoadArgs = {
  kepcoCode?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
};


export type PmContractGetPowerForecastArgs = {
  kepcoCode?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
};

export type PmContractChildKepco = PmKcust & {
   __typename?: 'PmContractChildKepco';
  id: Scalars['ID'];
  kepcoCode: Scalars['ID'];
  name: Scalars['String'];
  parentKepco?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  ismartState: Scalars['Int'];
  smartMetersEims?: Maybe<Array<Maybe<PmSmartMeterEims>>>;
};

export type PmContractNotiConfig = PmNotiConfig & {
   __typename?: 'PmContractNotiConfig';
  id: Scalars['ID'];
  contractId: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** dynamic notificationTime 변경이 가능한 알림 발송 시간 */
  notiTime?: Maybe<Scalars['String']>;
  /** static Notification time (it has highest priority over notiTime) */
  notiTimeStatic?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PmNotiConfig = {
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** dynamic notificationTime */
  notiTime?: Maybe<Scalars['String']>;
  /** static Notification time (it has highest priority over notiTime) */
  notiTimeStatic?: Maybe<Scalars['String']>;
};

export type PmContractWattThreshold = {
   __typename?: 'PmContractWattThreshold';
  id: Scalars['ID'];
  contractId?: Maybe<Scalars['ID']>;
  val?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PmContractServicePlan = {
   __typename?: 'PmContractServicePlan';
  id: Scalars['ID'];
  contractId: Scalars['ID'];
  planId: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  planName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  endDate?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type PmNotiList = {
   __typename?: 'PmNotiList';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<PmNoti>;
};

export type PmNoti = {
   __typename?: 'PmNoti';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  receiver?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  dateProcessed?: Maybe<Scalars['DateTime']>;
};

/** PM 유저 목록 */
export type PmUserlist = {
   __typename?: 'PmUserlist';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<PmUser>;
};

export type PmServicePlan = {
   __typename?: 'PmServicePlan';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
};

export type PmGlobalNotiConfig = PmNotiConfig & {
   __typename?: 'PmGlobalNotiConfig';
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** dynamic notificationTime */
  notiTime?: Maybe<Scalars['String']>;
  /** static Notification time (it has highest priority over notiTime) */
  notiTimeStatic?: Maybe<Scalars['String']>;
  ordr?: Maybe<Scalars['Int']>;
};

export type PmContractList = {
   __typename?: 'PmContractList';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<PmContract>;
};

/** PM Kepco 목록 */
export type PmKepcoList = {
   __typename?: 'PmKepcoList';
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<PmKepco>;
};

/**  pm analysis report list  */
export type PmAnalysisReportList = {
   __typename?: 'PmAnalysisReportList';
  /**  for caching (Alias for kepcoCode) */
  id: Scalars['ID'];
  total: Scalars['Int'];
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  entries: Array<PmAnalysisReport>;
};

/**  Dr root query  */
export type DrQuery = {
   __typename?: 'DrQuery';
  /**  참여고객 유저  */
  drViewer?: Maybe<DrUser>;
  drCustomer: DrCustomer;
};


/**  Dr root query  */
export type DrQueryDrCustomerArgs = {
  id: Scalars['ID'];
};

/**  Dr 유저  */
export type DrUser = Node & User & {
   __typename?: 'DrUser';
  /**  유저 UUID  */
  id: Scalars['ID'];
  /**  E-MAIL  */
  email: Scalars['String'];
  /**  E-MAIL 인증 여부  */
  emailVerified: Scalars['Boolean'];
  /**  이름  */
  name?: Maybe<Scalars['String']>;
  /**  폰번호  */
  phone?: Maybe<Scalars['String']>;
  /**  사진 URL  */
  photoURL?: Maybe<Scalars['String']>;
  /**  비활성화 여부  */
  disabled: Scalars['Boolean'];
  /**  유저 생성일  */
  createdAt: Scalars['DateTime'];
  dr: DrUserClaim;
  /** 앱푸쉬설정 */
  appPushSetting: DrUserAppPushSetting;
  customer?: Maybe<DrCustomer>;
};

export type DrUserClaim = {
   __typename?: 'DrUserClaim';
  /**  참여고객 id  */
  siteId?: Maybe<Scalars['ID']>;
  /**  로그인 id  */
  loginId?: Maybe<Scalars['String']>;
  /**  dr db 유저 인덱스 번호  */
  userIdx?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

/**  유저 알림 수신 설정  */
export type DrUserAppPushSetting = {
   __typename?: 'DrUserAppPushSetting';
  /**  수요감축요청 지시  */
  dispatchedReductionOrder: DrAppPushSetting;
  /**  계획감축 대기  */
  scheduledReductionReady: DrAppPushSetting;
  /**  수요감축요청 발령예상 알림  */
  dispatchedReductionPrediction: DrAppPushSetting;
};

/**  app push setting  */
export enum DrAppPushSetting {
  On = 'ON',
  Off = 'OFF'
}

/**  참여고객  */
export type DrCustomer = {
   __typename?: 'DrCustomer';
  /**  참여고객 ID  */
  id: Scalars['ID'];
  /**  상위 수요관리사업자 ID (추가됨)  */
  companyId: Scalars['ID'];
  /**  참여고객 이름  */
  name: Scalars['String'];
  /**  요금제  */
  feePlan?: Maybe<Scalars['String']>;
  /**  한전계약용량  */
  kepcoContractCapacity?: Maybe<Scalars['Float']>;
  /**  계약용량(감축가능용량)  */
  contractCapacity?: Maybe<Scalars['Float']>;
  /**  적용전력  */
  applyCapacity?: Maybe<Scalars['Float']>;
  /**  KEPCO CODE (추가됨)  */
  kepcoCode?: Maybe<Scalars['String']>;
  /**  CBL type */
  cblType?: Maybe<DrCblType>;
  /**  SAA적용 여부  */
  saaOption?: Maybe<Scalars['String']>;
  /**  금일 급전가능성  */
  kpxPowerCondition: DrKpxPowerCondition;
  /**  사용량  */
  powerUsages: DrPowerUsages;
  /**  금일 감축이벤트  */
  todayReductionEvent?: Maybe<DrReductionEvent>;
  /**  감축이벤트 한건 선택  */
  reductionEvent?: Maybe<DrReductionEvent>;
  /**  감축이벤트 목록  */
  reductionEvents: DrReductionEvents;
  /**  사용량분석 - 사용량  */
  usageAnalysisStatistics: DrUsageAnalysisStatistics;
  /**  사용량분석 - cbl  */
  cblAnalysisStatistics: DrCblAnalysisStatistics;
  /**  사용량분석 - 이용시간  */
  usageTimeAnalysisStatistics: DrUsageTimeAnalysisStatistics;
  /**  사용량분석 - 이용시간 최대수요  */
  maxDemandAnalysisStatistics: DrMaxDemandAnalysisStatistics;
  /**  사용량분석 - 참여고객 평균  */
  customerAnalysisStatistics: DrCustomerAnalysisStatistics;
  /**  계획감축 입찰 인터벌 목록 조회  */
  reductionBidding?: Maybe<Array<Maybe<DrReductionBidInterval>>>;
  /**  계획감축 입찰 목록  */
  reductionBids: DrReductionBids;
  /**  계획감축 입찰 한건  */
  reductionBid?: Maybe<DrReductionBid>;
  /**  공지사항 목록  */
  notices: Array<DrNotice>;
  /**  공지사항 한건  */
  notice: DrNotice;
  /**  알림내역  */
  notifications: Array<DrNotification>;
  /**  영업담당자  */
  representative?: Maybe<Array<Maybe<DrSalesRepresentative>>>;
};


/**  참여고객  */
export type DrCustomerPowerUsagesArgs = {
  meterType: DrMeterType;
  wattageInterval: DrWattageInterval;
};


/**  참여고객  */
export type DrCustomerTodayReductionEventArgs = {
  reductionType?: Maybe<DrReductionType>;
};


/**  참여고객  */
export type DrCustomerReductionEventArgs = {
  id: Scalars['ID'];
};


/**  참여고객  */
export type DrCustomerReductionEventsArgs = {
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
};


/**  참여고객  */
export type DrCustomerUsageAnalysisStatisticsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  meterType: DrMeterType;
};


/**  참여고객  */
export type DrCustomerCblAnalysisStatisticsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  meterType: DrMeterType;
};


/**  참여고객  */
export type DrCustomerUsageTimeAnalysisStatisticsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  meterType: DrMeterType;
};


/**  참여고객  */
export type DrCustomerMaxDemandAnalysisStatisticsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  meterType: DrMeterType;
};


/**  참여고객  */
export type DrCustomerReductionBiddingArgs = {
  reductionBidDate: Scalars['DateTime'];
  referenceDate: Scalars['DateTime'];
};


/**  참여고객  */
export type DrCustomerReductionBidsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  참여고객  */
export type DrCustomerReductionBidArgs = {
  id: Scalars['ID'];
};


/**  참여고객  */
export type DrCustomerNoticeArgs = {
  id: Scalars['ID'];
};

/** CBL 타입 */
export enum DrCblType {
  Max45 = 'MAX45',
  Mid610 = 'MID610'
}

/**  kpx 전력현황  */
export type DrKpxPowerCondition = {
   __typename?: 'DrKpxPowerCondition';
  /** 금일 급전 가능성 */
  todayDrPossibility?: Maybe<DrKpxTodayDrPossibility>;
  /** 최대부하전망 - 상태 */
  maxLoadForecastStatus?: Maybe<DrKpxPowerConditionStatus>;
  /** 최대부하전망 - 피크예상시간 */
  maxLoadForecastPeakExpectationTime?: Maybe<Scalars['String']>;
  /** 최대부하전망 - 최대부하 */
  maxLoadForecastMaxLoad?: Maybe<Scalars['Float']>;
  /** 최대부하전망 - 공급예비력 */
  maxLoadForecastSupplyReservePower?: Maybe<Scalars['Float']>;
  /** 최대부하전망 - 공급예비율 */
  maxLoadForecastSupplyReserveRate?: Maybe<Scalars['Float']>;
  /** 실시간 전력수급현황 - 상태 */
  realTimePowerSupplyStatus?: Maybe<DrKpxPowerConditionStatus>;
  /** 실시간 전력수급현황 - 현재부하 */
  realTimePowerSupplyCurrentLoad?: Maybe<Scalars['Float']>;
  /** 실시간 전력수급현황 - 공급예비력 */
  realTimePowerSupplyReservePower?: Maybe<Scalars['Float']>;
  /** 실시간 전력수급현황 - 공급예비율 */
  realTimePowerSupplyReserveRate?: Maybe<Scalars['Float']>;
  /** 전력수급 대책기간 - 기간 */
  powerSupplyMeasPeriod?: Maybe<Scalars['String']>;
  /** 전력수급 대책기간 - 목표수요 */
  powerSupplyMeasTargetDemand?: Maybe<Scalars['String']>;
  /** 전력수급 대책기간 - 예비력 */
  powerSupplyMeasReservePower?: Maybe<Scalars['String']>;
};

/** 금일 급전발령 가능성 */
export enum DrKpxTodayDrPossibility {
  /** 높음 */
  High = 'HIGH',
  /** 낮음 */
  Low = 'LOW'
}

/**  kpx 전력현황 상태  */
export enum DrKpxPowerConditionStatus {
  /** 정상 */
  Normal = 'NORMAL',
  /** 준비 */
  Ready = 'READY',
  /** 관심 */
  Attention = 'ATTENTION',
  /** 주의 */
  Alert = 'ALERT',
  /** 경계 */
  Warning = 'WARNING',
  /** 심각 */
  Emergency = 'EMERGENCY'
}

/** 검침데이터 종류 */
export enum DrMeterType {
  /** ONE */
  Five = 'FIVE',
  Fifteen = 'FIFTEEN'
}

/** 검침데이터 인터벌 */
export enum DrWattageInterval {
  Five = 'FIVE',
  Fifteen = 'FIFTEEN',
  Hour = 'HOUR',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH'
}

/** 전력사용량 목록 */
export type DrPowerUsages = {
   __typename?: 'DrPowerUsages';
  total?: Maybe<DrPowerUsage>;
  list?: Maybe<Array<Maybe<DrPowerUsage>>>;
};

/** 전력사용량 */
export type DrPowerUsage = {
   __typename?: 'DrPowerUsage';
  /** 시간 (수정됨)  */
  date?: Maybe<Scalars['DateTime']>;
  /** 사용량 */
  usage?: Maybe<Scalars['Float']>;
  /** cbl */
  cbl?: Maybe<Scalars['Float']>;
  /** 목표사용량 */
  targetUsage?: Maybe<Scalars['Float']>;
  /** 목표대비사용량 */
  targetCompareUsage?: Maybe<Scalars['Float']>;
  /** 잔여사용량 */
  remainUsage?: Maybe<Scalars['Float']>;
  /** 목표감축량 */
  targetReductionWattage?: Maybe<Scalars['Float']>;
  /** 감축이행량 */
  reductionWattage?: Maybe<Scalars['Float']>;
  /** 감축률 */
  reductionRate?: Maybe<Scalars['Float']>;
  /** 누적감축률 */
  accumulationReductionRate?: Maybe<Scalars['Float']>;
};

/** 감축이벤트 구분 */
export enum DrReductionType {
  /** 수요감축요청, 등록시험, 감축시험 */
  Dr = 'DR',
  /** 계획감축 */
  Sr = 'SR'
}

/** 감축이벤트 */
export type DrReductionEvent = {
   __typename?: 'DrReductionEvent';
  /** 감축이벤트 번호 */
  id: Scalars['ID'];
  /**  참여고객 id (추가됨)  */
  customerId?: Maybe<Scalars['ID']>;
  /** 시작일 */
  from?: Maybe<Scalars['DateTime']>;
  /** 종료일 */
  to?: Maybe<Scalars['DateTime']>;
  /** 지속시간(분) */
  durationMinute?: Maybe<Scalars['Int']>;
  /** cbl */
  cbl?: Maybe<Scalars['Float']>;
  /** 사용량 */
  usage?: Maybe<Scalars['Float']>;
  /** 목표사용량 */
  targetUsage?: Maybe<Scalars['Float']>;
  /** 목표대비사용량 */
  targetCompareUsage?: Maybe<Scalars['Float']>;
  /** 목표감축량 */
  targetReductionWattage?: Maybe<Scalars['Float']>;
  /** 감축이행량 */
  reductionWattage?: Maybe<Scalars['Float']>;
  /** 감축률 */
  reductionRate?: Maybe<Scalars['Float']>;
  /** 누적감축률 */
  accumulationReductionRate?: Maybe<Scalars['Float']>;
  /** 감축 구분 */
  reductionType?: Maybe<DrReductionType>;
  /** 감축 종류 */
  reductionName?: Maybe<DrReductionName>;
  /** 감축실적 등급 */
  reductionGrade?: Maybe<DrReductionGrade>;
  /** 성공여부 */
  reductionResult?: Maybe<DrReductionResult>;
  /** 감축이벤트 인터벌 한건 */
  interval?: Maybe<DrReductionEventInterval>;
  /** 감축이벤트 인터벌 목록 */
  intervals: Array<DrReductionEventInterval>;
  /** 감축전력량 */
  powerUsages: DrPowerUsages;
};


/** 감축이벤트 */
export type DrReductionEventIntervalArgs = {
  no: Scalars['Int'];
};


/** 감축이벤트 */
export type DrReductionEventPowerUsagesArgs = {
  meterType: DrMeterType;
  wattageInterval: DrWattageInterval;
};

/** 감축이벤트 명? */
export enum DrReductionName {
  /** 수요감축요청 (Dispatched Reduction) */
  DispatchedReduction = 'DispatchedReduction',
  /** 등록시험 (Registration Reduction) */
  RegistrationReduction = 'RegistrationReduction',
  /** 감축시험 (Test Reduction) */
  TestReduction = 'TestReduction',
  /** 계획감축 (Scheduled Reduction) */
  ScheduledReduction = 'ScheduledReduction'
}

/** 감축실적 등급 (수정됨)  */
export enum DrReductionGrade {
  /**  매우 우수  */
  Perfect = 'PERFECT',
  /**  우수  */
  Good = 'GOOD',
  /**  보통  */
  Normal = 'NORMAL',
  /**  부진  */
  Warning = 'WARNING',
  /**  매우 부진  */
  Danger = 'DANGER'
}

export enum DrReductionResult {
  Success = 'SUCCESS',
  Failed = 'FAILED',
  Unknown = 'UNKNOWN'
}

/** 감축이벤트 인터벌 */
export type DrReductionEventInterval = {
   __typename?: 'DrReductionEventInterval';
  /** 감축이벤트 번호 (추가됨)  */
  eventId: Scalars['ID'];
  /**  참여고객 id (추가됨)  */
  customerId?: Maybe<Scalars['ID']>;
  /** 인터벌 순번 */
  no: Scalars['Int'];
  /** 시작일 */
  from: Scalars['DateTime'];
  /** 종료일 */
  to: Scalars['DateTime'];
  /** 지속시간(분) */
  durationMinute: Scalars['Int'];
  /** cbl */
  cbl?: Maybe<Scalars['Float']>;
  /** 사용량 */
  usage?: Maybe<Scalars['Float']>;
  /** 목표사용량 */
  targetUsage?: Maybe<Scalars['Float']>;
  /** 목표대비사용량 */
  targetCompareUsage?: Maybe<Scalars['Float']>;
  /** 목표감축량 */
  targetReductionWattage?: Maybe<Scalars['Float']>;
  /** 감축이행량 */
  reductionWattage?: Maybe<Scalars['Float']>;
  /** 감축률 */
  reductionRate?: Maybe<Scalars['Float']>;
  /** 누적감축률 */
  accumulationReductionRate?: Maybe<Scalars['Float']>;
  /** 성공여부 */
  reductionResult: DrReductionResult;
  /** 감축전력량 */
  powerUsages: DrPowerUsages;
};


/** 감축이벤트 인터벌 */
export type DrReductionEventIntervalPowerUsagesArgs = {
  meterType: DrMeterType;
  wattageInterval: DrWattageInterval;
};

/** 감축이벤트 목록 */
export type DrReductionEvents = {
   __typename?: 'DrReductionEvents';
  /** 감축이벤트 통계 */
  statistics?: Maybe<DrReductionEventStatistics>;
  /** 감축이벤트 목록 */
  list?: Maybe<Array<Maybe<DrReductionEvent>>>;
};

/** 감축이벤트 통계 */
export type DrReductionEventStatistics = {
   __typename?: 'DrReductionEventStatistics';
  /** 총 감축횟수 */
  totalReductionCount?: Maybe<Scalars['Int']>;
  /** 등록시험횟수 */
  registrationReductionCount?: Maybe<Scalars['Int']>;
  /** 수요감축요청횟수 */
  dispatchedReductionCount?: Maybe<Scalars['Int']>;
  /** 감축시험횟수 */
  testReductionCount?: Maybe<Scalars['Int']>;
  /** 계획감축횟수 */
  scheduledReductionCount?: Maybe<Scalars['Int']>;
  /** 성공횟수 */
  successCount?: Maybe<Scalars['Int']>;
  /** 실패횟수 */
  failCount?: Maybe<Scalars['Int']>;
  /** 총 감축량 */
  reductionWattage?: Maybe<Scalars['Float']>;
  /** 평균 감축률 */
  reductionRate?: Maybe<Scalars['Float']>;
  /** 총 감축시간 */
  durationMinute?: Maybe<Scalars['Int']>;
};

/** 사용량분석 - 사용량 통계 */
export type DrUsageAnalysisStatistics = {
   __typename?: 'DrUsageAnalysisStatistics';
  /** 최대수요전력 */
  maxDemandUsage?: Maybe<Scalars['Float']>;
  /** 최대수요 시간대 */
  maxDemandDate?: Maybe<Scalars['DateTime']>;
  /** 적용전력 근접횟수 */
  applyCapacityProximityCount?: Maybe<Scalars['Int']>;
  /** 사용량 목록 */
  list?: Maybe<Array<Maybe<DrUsageAnalysis>>>;
};

/** 사용량분석 - 사용량 */
export type DrUsageAnalysis = {
   __typename?: 'DrUsageAnalysis';
  /**  날짜 (수정됨)  */
  date?: Maybe<Scalars['DateTime']>;
  /** 사용량 */
  usage?: Maybe<Scalars['Float']>;
  /** 최대수요전력 */
  maxDemandUsage?: Maybe<Scalars['Float']>;
  /** 적용전력대비 */
  applyCapacityCompare?: Maybe<Scalars['Float']>;
};

/** 사용량분석 - cbl 통계 */
export type DrCblAnalysisStatistics = {
   __typename?: 'DrCblAnalysisStatistics';
  /** cbl 목록 */
  list: Array<DrCblAnalysis>;
};

/** 사용량분석 - cbl */
export type DrCblAnalysis = {
   __typename?: 'DrCblAnalysis';
  /** 시간 (수정됨)  */
  date?: Maybe<Scalars['DateTime']>;
  /** 사용량 */
  usage?: Maybe<Scalars['Float']>;
  /** cbl */
  cbl?: Maybe<Scalars['Float']>;
  /** cbl - 사용량 */
  cblDiffUsage?: Maybe<Scalars['Float']>;
  /** cbl - 적용전력 */
  cblDiffContractCapacity?: Maybe<Scalars['Float']>;
};

/** 사용량분석 - 이용시간 통계 */
export type DrUsageTimeAnalysisStatistics = {
   __typename?: 'DrUsageTimeAnalysisStatistics';
  /** 평균 전력이용시간 (수정됨)  */
  avgUsageHour?: Maybe<Scalars['Float']>;
  /** 전력이용시간 목록 */
  list?: Maybe<Array<Maybe<DrUsageTimeAnalysis>>>;
};

/** 사용량분석 - 이용시간 */
export type DrUsageTimeAnalysis = {
   __typename?: 'DrUsageTimeAnalysis';
  /** 시간 (수정됨)  */
  date?: Maybe<Scalars['DateTime']>;
  /** 평균사용시간 */
  usageHour?: Maybe<Scalars['Float']>;
};

/** 사용량분석 - 이용시간 최대수요 통계 */
export type DrMaxDemandAnalysisStatistics = {
   __typename?: 'DrMaxDemandAnalysisStatistics';
  /** 주의시간대 */
  attentionHourRange?: Maybe<Scalars['String']>;
  /** 최대수요 횟수 목록 */
  list?: Maybe<Array<Maybe<DrMaxDemandAnalysis>>>;
};

/** 사용량분석 - 이용시간 최대수요 */
export type DrMaxDemandAnalysis = {
   __typename?: 'DrMaxDemandAnalysis';
  /** 시작시간 */
  hourRange?: Maybe<Scalars['String']>;
  /** 적용전력초과 횟수 */
  applyCapacityExcessCount?: Maybe<Scalars['Int']>;
  /** 적용전력근접 횟수 */
  applyCapacityProximityCount?: Maybe<Scalars['Int']>;
};

/** 사용량분석 - 참여고객 평균 통계 */
export type DrCustomerAnalysisStatistics = {
   __typename?: 'DrCustomerAnalysisStatistics';
  /** 계약용량 평균 */
  contractCapacity: DrCustomerAnalysis;
  /** 적용전력 평균 */
  applyCapacity: DrCustomerAnalysis;
  /** 수요감축요청 발령시간대 cbl 평균 */
  averageDrCbl: DrCustomerAnalysis;
};

/** 사용량분석 - 참여고객 평균 */
export type DrCustomerAnalysis = {
   __typename?: 'DrCustomerAnalysis';
  /** 현재 참여고객 */
  thisCustomer?: Maybe<Scalars['Float']>;
  /** 같은 업종 참여고객 */
  sameIndustryCustomer?: Maybe<Scalars['Float']>;
  /** 비슷한 계약용량 참여고객 */
  similarCapacityCustomer?: Maybe<Scalars['Float']>;
  /** MAX data */
  maxCustomer?: Maybe<Scalars['Float']>;
};

/** 계획감축 입찰 인터벌 */
export type DrReductionBidInterval = {
   __typename?: 'DrReductionBidInterval';
  /** 시간 */
  hour?: Maybe<Scalars['String']>;
  /** cbl */
  cbl?: Maybe<Scalars['Float']>;
  /** 입찰용량 */
  biddingWattage?: Maybe<Scalars['Float']>;
  /** 낙찰용량 */
  winningBidWattage?: Maybe<Scalars['Float']>;
  /** 낙찰단가 */
  winningBidSmp?: Maybe<Scalars['Float']>;
  /** 참고일 전력사용량 */
  referenceDateUsage?: Maybe<Scalars['Float']>;
  /** 오늘의 smp */
  todaySmp?: Maybe<Scalars['Float']>;
};

/** 계획감축 입찰 목록 */
export type DrReductionBids = {
   __typename?: 'DrReductionBids';
  /** 계획감축 입찰 통계 */
  statistics: DrReductionBidStatistics;
  /** 계획감축 입찰 목록 */
  list: Array<DrReductionBid>;
};

/** 계획감축 입찰 통계 */
export type DrReductionBidStatistics = {
   __typename?: 'DrReductionBidStatistics';
  /** 낙찰율 */
  winningBidRate?: Maybe<Scalars['Float']>;
  /** 총 입찰 횟수 */
  totalCount?: Maybe<Scalars['Int']>;
  /** 낙찰 횟수 */
  winningBidCount?: Maybe<Scalars['Int']>;
  /** 유찰 횟수 */
  failureBidCount?: Maybe<Scalars['Int']>;
  /** 평균 입찰용량 */
  averageBiddingWattage?: Maybe<Scalars['Float']>;
  /** 평균 낙찰용량 */
  averageWinningBidWattage?: Maybe<Scalars['Float']>;
  /** 평균 낙찰단가 */
  averageWinningBidSmp?: Maybe<Scalars['Float']>;
};

/** 계획감축 입찰 한건 */
export type DrReductionBid = {
   __typename?: 'DrReductionBid';
  /** 계획감축 입찰 번호 */
  id: Scalars['ID'];
  /**  참여고객 ID  */
  customerId: Scalars['ID'];
  /** 계획감축 입찰일 */
  reductionBidDate?: Maybe<Scalars['DateTime']>;
  /** 입찰상태 */
  bidStatus?: Maybe<DrReductionBidStatus>;
  /** 낙찰시간 */
  winningBidHour?: Maybe<Scalars['Float']>;
  /** 낙찰용량 */
  winningBidWattage?: Maybe<Scalars['Float']>;
  /** 입찰시간 */
  biddingHour?: Maybe<Scalars['Float']>;
  /** 입찰용량 */
  biddingWattage?: Maybe<Scalars['Float']>;
  /** 평균낙찰단가 */
  averageWinningBidSmp?: Maybe<Scalars['Float']>;
  /** 시간별 입찰내용 */
  intervals?: Maybe<Array<Maybe<DrReductionBidInterval>>>;
};

/** 계획감축 입찰 상태 */
export enum DrReductionBidStatus {
  /** 낙찰 */
  Winningbid = 'WINNINGBID',
  /** 유찰 */
  Failurebid = 'FAILUREBID',
  /** 입찰 */
  Bidding = 'BIDDING',
  /** 신청 */
  Request = 'REQUEST'
}

/**  공지사항  */
export type DrNotice = {
   __typename?: 'DrNotice';
  id: Scalars['ID'];
  from: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  files?: Maybe<Array<Maybe<DrFile>>>;
};

/**  첨부파일  */
export type DrFile = {
   __typename?: 'DrFile';
  id: Scalars['ID'];
  code?: Maybe<Scalars['String']>;
  noticeId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

/**  유저 알림  */
export type DrNotification = {
   __typename?: 'DrNotification';
  id: Scalars['ID'];
  from: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
};

/**  영업담당자  */
export type DrSalesRepresentative = {
   __typename?: 'DrSalesRepresentative';
  /**  영업담당자 이름  */
  name?: Maybe<Scalars['String']>;
  /**  영업담당자 폰번호  */
  mobile?: Maybe<Scalars['String']>;
};

/**  Trade root query  */
export type TradeQuery = {
   __typename?: 'TradeQuery';
  /**  중개사업자  */
  broker: TradeBroker;
  /**  중개사업자 목록  */
  brokers: Array<TradeBroker>;
  /**  발전사업자 목록  */
  generators: Array<TradeGenerator>;
  /**  대리점 목록  */
  agencies: Array<TradeAgency>;
  /**  사이트 조회  */
  sites: Array<Maybe<TradeSite>>;
  /**  인증 토큰으로부터 유저를 조회  */
  viewer?: Maybe<TradeUser>;
  /**  유저를 조회  */
  user: TestUser;
  /**  유저 목록을 조회  */
  users: TradeUserList;
  /**  SMP  */
  smp?: Maybe<Array<Maybe<TradeSmp>>>;
  /**  REC  */
  rec?: Maybe<Array<Maybe<TradeRec>>>;
  /**  Data Source 유형 목록 조회  */
  datasourceTypes?: Maybe<Array<Maybe<TradeDatasourceType>>>;
  /**  Data Source 유형 조회  */
  datasourceType?: Maybe<TradeDatasourceType>;
  /**  공통 데이터  */
  common?: Maybe<TradeCommon>;
};


/**  Trade root query  */
export type TradeQueryBrokerArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeQueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};


/**  Trade root query  */
export type TradeQueryUsersArgs = {
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
  where?: Maybe<Scalars['JSON']>;
  orderBy?: Maybe<Scalars['JSON']>;
};


/**  Trade root query  */
export type TradeQuerySmpArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval?: Maybe<TradeIntervalTypeE>;
};


/**  Trade root query  */
export type TradeQueryRecArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval?: Maybe<TradeIntervalTypeE>;
};


/**  Trade root query  */
export type TradeQueryDatasourceTypeArgs = {
  id?: Maybe<Scalars['ID']>;
};

/**  중개사업자  */
export type TradeBroker = {
   __typename?: 'TradeBroker';
  /**  ID, 시스템 발급 auto increment  */
  id: Scalars['ID'];
  /**  중개사업자 명  */
  name: Scalars['String'];
  /**  사업자번호  */
  businessNumber?: Maybe<Scalars['String']>;
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /**  중개사업자 하위 발전소의 전체 용량  */
  capacity: TradeCapacity;
  /**  보유 전력 자원수  */
  count: TradeCount;
  /**  입찰 내역  */
  bids?: Maybe<Array<Maybe<TradeBid>>>;
  /**  중개사업자 하위 집합자원 목록  */
  groups?: Maybe<Array<Maybe<TradeGroup>>>;
  /**  중개사업자 하위 집합자원  */
  group?: Maybe<TradeGroup>;
  /**  중개사업자 하위 대리점 목록  */
  agencies?: Maybe<Array<Maybe<TradeAgency>>>;
  /**  중개사업자 하위 대리점  */
  agency?: Maybe<TradeAgency>;
  /**  중개사업자 하위 발전사업자 목록  */
  generators?: Maybe<Array<Maybe<TradeGenerator>>>;
  /**  중개사업자 하위 발전사업자  */
  generator?: Maybe<TradeGenerator>;
  /**  중개사업자 하위 사이트 목록  */
  sites?: Maybe<Array<Maybe<TradeSite>>>;
  /**  중개사업자 하위 사이트  */
  site?: Maybe<TradeSite>;
  /**  중개사업자 하위 사이트의 상태 현황  */
  siteStates?: Maybe<Array<Maybe<TradeSiteState>>>;
  /**  중개사업자 site 의 alarm 목록(이벤트 로그)  */
  alarms: TradeAlarm;
  /**  smp 구매처 목록  */
  smpBuyers?: Maybe<Array<Maybe<TradeSmpBuyer>>>;
  /**  통계  */
  stats?: Maybe<TradeStats>;
  /**  설비별 계약 정보 목록  */
  contracts?: Maybe<TradeFacilityContract>;
  /**  점검이력 조회  */
  inspectionLog?: Maybe<TradeInspectionLog>;
  /**  점검이력 목록 조회  */
  inspectionLogs?: Maybe<Array<Maybe<TradeInspectionLog>>>;
  /**  게시글 조회  */
  board?: Maybe<TradeBoard>;
  /**  게시글 목록 조회  */
  boards?: Maybe<Array<Maybe<TradeBoard>>>;
  /**  POSCO 한정 RM 에 저장되어있는 message  */
  status?: Maybe<Array<Maybe<TradeStatusOfRmUsers>>>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstant>;
};


/**  중개사업자  */
export type TradeBrokerCapacityArgs = {
  type: TradeStateTypeE;
};


/**  중개사업자  */
export type TradeBrokerCountArgs = {
  type: TradeStateTypeE;
};


/**  중개사업자  */
export type TradeBrokerBidsArgs = {
  date: Scalars['DateTime'];
};


/**  중개사업자  */
export type TradeBrokerGroupArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerAgencyArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerGeneratorArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerSitesArgs = {
  isTrading?: Maybe<Scalars['Boolean']>;
};


/**  중개사업자  */
export type TradeBrokerSiteArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerAlarmsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  중개사업자  */
export type TradeBrokerStatsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  중개사업자  */
export type TradeBrokerInspectionLogArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerInspectionLogsArgs = {
  from: Scalars['Date'];
  to: Scalars['Date'];
};


/**  중개사업자  */
export type TradeBrokerBoardArgs = {
  id: Scalars['ID'];
};


/**  중개사업자  */
export type TradeBrokerStatusArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

/**  상태  */
export enum TradeStateTypeE {
  /**  전체  */
  All = 'ALL',
  /**  유효한  */
  Valid = 'VALID',
  /**  유효하지 않은  */
  Invalid = 'INVALID'
}

/**  설비 용량  */
export type TradeCapacity = {
   __typename?: 'TradeCapacity';
  /**  UUID V1  */
  _id: Scalars['ID'];
  /**  PV 용량  */
  pv: Scalars['Float'];
  /**  PCS 용량 (ESS)  */
  pcs: Scalars['Float'];
  /**  battery 용량(ESS)  */
  battery: Scalars['Float'];
  /**  WT 용량  */
  wt: Scalars['Float'];
};

/**  자원 수  */
export type TradeCount = {
   __typename?: 'TradeCount';
  /**  generators / agency / broker 의 해당 id  */
  id?: Maybe<Scalars['ID']>;
  /**  PV 개수  */
  pv: Scalars['Int'];
  /**  ESS 개수  */
  ess: Scalars['Int'];
  /**  WT 개수  */
  wt: Scalars['Int'];
  /**  SITE 개수  */
  site: Scalars['Int'];
};

/**  입찰서 정보  */
export type TradeBid = {
   __typename?: 'TradeBid';
  /**  입찰서 ID  */
  id: Scalars['ID'];
  /**  입찰서 유형  */
  type: TradeBidTypeE;
  /**  입찰을 수행한 자원 ID  */
  groupId: Scalars['ID'];
  /**  입찰일  */
  date: Scalars['Date'];
  /**  입찰서 생성 시 예측량 요약 정보  */
  summary: Scalars['JSON'];
  /**  입찰서 생성 시 예측량 상세 정보  */
  detail: Scalars['JSON'];
  /**  file id  */
  fileId: Scalars['String'];
  /**  입찰서 엑셀 파일  */
  file: File;
  /**  입찰서 생성일시  */
  createdAt: Scalars['DateTime'];
};

/**  입찰 종류  */
export enum TradeBidTypeE {
  /**  초기 입찰  */
  Initial = 'INITIAL',
  /**  변경 입찰  */
  Modified = 'MODIFIED'
}

/**  집합자원  */
export type TradeGroup = {
   __typename?: 'TradeGroup';
  /**  집합자원 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  중개사업자 ID  */
  brokerId: Scalars['ID'];
  /**  집합자원 명  */
  name: Scalars['String'];
  /**  집합 전력 자원 상태  */
  state: Scalars['Int'];
  /**  집합 전력 자원 코드  */
  code: Scalars['String'];
  /**  집합 전력 자원 거래유형  */
  saleType: Scalars['Int'];
  /**  거래 제한  */
  saleLimit: Scalars['Int'];
  /**  rec 거래  */
  isSaleRec: Scalars['Boolean'];
  /**  집합자원 시작일  */
  dateStart: Scalars['DateTime'];
  /**  집합자원 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  보유 전력 자원수  */
  count: TradeCount;
  /**  설비 용량  */
  capacity: TradeCapacity;
  /**  입찰 기록  */
  bids: Array<TradeBid>;
  /**  선택한 월에 참여중인 발전소 목록  */
  sites: Array<Maybe<TradeSite>>;
  /**  집합자원의 발전소 상태 현황  */
  siteStates: Array<TradeSiteState>;
  /**  발전소 알람 목록(이벤트 로그)  */
  alarms: TradeAlarm;
  /**  통계  */
  stats: TradeStats;
  /**  정산  */
  settlements?: Maybe<Array<Maybe<TradeSettlement>>>;
  /**  REC 계약  */
  contracts?: Maybe<TradeFacilityContract>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstant>;
};


/**  집합자원  */
export type TradeGroupCountArgs = {
  type: TradeStateTypeE;
};


/**  집합자원  */
export type TradeGroupCapacityArgs = {
  type: TradeStateTypeE;
};


/**  집합자원  */
export type TradeGroupBidsArgs = {
  date: Scalars['DateTime'];
};


/**  집합자원  */
export type TradeGroupSitesArgs = {
  date?: Maybe<Scalars['DateTime']>;
};


/**  집합자원  */
export type TradeGroupAlarmsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  집합자원  */
export type TradeGroupStatsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  집합자원  */
export type TradeGroupSettlementsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};

/**  발전소  */
export type TradeSite = {
   __typename?: 'TradeSite';
  /**  발전소 ID(string)  */
  id: Scalars['ID'];
  /**  디바이스 타입 idx  */
  facilityTypeId?: Maybe<Scalars['ID']>;
  /**  중개사업자 idx  */
  brokerId: Scalars['ID'];
  /**  대리점 idx  */
  agencyId: Scalars['ID'];
  /**  대리점명  */
  agencyName: Scalars['String'];
  /**  발전사업자 idx  */
  generatorId: Scalars['ID'];
  /**  발전사업자명  */
  generatorName: Scalars['String'];
  /**  smp 구매처 idx  */
  smpBuyerId?: Maybe<Scalars['ID']>;
  /**  지역코드 육지 : 1, 제주 : 9  */
  areaCode?: Maybe<Scalars['String']>;
  /**  kpx 자원코드  */
  kpxCode?: Maybe<Scalars['String']>;
  /**  발전소 명  */
  name: Scalars['String'];
  /**  집합자원 참여 시작일  */
  dateStart: Scalars['DateTime'];
  /**  집합자원 참여 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  전력 거래 가능 여부  */
  isSalesRec?: Maybe<Scalars['Boolean']>;
  /**  발전소 이미지  */
  image?: Maybe<Scalars['String']>;
  /**  발전소의 주소  */
  address?: Maybe<Scalars['String']>;
  /**  발전소의 경도  */
  lon?: Maybe<Scalars['Float']>;
  /**  발전소의 위도  */
  lat?: Maybe<Scalars['Float']>;
  /**  json format 의 발전소 attributes  */
  attributes?: Maybe<Scalars['JSON']>;
  /**  발전소 생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  발전소 수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  발전소 삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /**  site 의 alarm 목록(이벤트 로그)  */
  alarms?: Maybe<ITradeAlarm>;
  /**  TEST 어떤걸 조회할 수 있는지  */
  of?: Maybe<ITradeSite>;
  /**  TEST  */
  stats?: Maybe<ITradeStatsOfSite>;
  /**  정산  */
  settlements?: Maybe<Array<Maybe<TradeSettlement>>>;
  /**  집합자원 월별 참여 목록  */
  monthlyGroup: Array<Maybe<TradeMapperGroupSiteMonthly>>;
  /**  site 의 REC 자원정보 목록  */
  contracts?: Maybe<ITradeContracts>;
};


/**  발전소  */
export type TradeSiteAlarmsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  발전소  */
export type TradeSiteStatsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  발전소  */
export type TradeSiteSettlementsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  발전소  */
export type TradeSiteMonthlyGroupArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

/**  발전소 유형별 alarms  */
export type ITradeAlarm = ITradeAlarmPv | ITradeAlarmEss | ITradeAlarmPvess | ITradeAlarmWt | ITradeAlarmFc;

/**  PV 유형의 알람  */
export type ITradeAlarmPv = {
   __typename?: 'ITradeAlarmPV';
  pv: Array<Maybe<TradeAlarmPv>>;
};

/**  PV alarms  */
export type TradeAlarmPv = {
   __typename?: 'TradeAlarmPV';
  /**  site ID  */
  siteId: Scalars['ID'];
  /**  site ID  */
  siteName: Scalars['String'];
  /**  발전소 알람 ID  */
  id: Scalars['ID'];
  /**  PV ID  */
  pvId: Scalars['ID'];
  /**  심각도  */
  severity: Scalars['String'];
  /**  내용  */
  message: Scalars['String'];
  /**  발생일  */
  reportedAt: Scalars['DateTime'];
  /**  생성일  */
  createdAt: Scalars['DateTime'];
};

/**  ESS 유형의 알람  */
export type ITradeAlarmEss = {
   __typename?: 'ITradeAlarmESS';
  ess: Array<Maybe<TradeAlarmEss>>;
};

/**  ESS alarms  */
export type TradeAlarmEss = {
   __typename?: 'TradeAlarmESS';
  /**  site ID  */
  siteId: Scalars['ID'];
  /**  site ID  */
  siteName: Scalars['String'];
  /**  발전소 알람 ID  */
  id: Scalars['ID'];
  /**  ESS ID  */
  essId: Scalars['ID'];
  /**  심각도  */
  severity: Scalars['String'];
  /**  내용  */
  message: Scalars['String'];
  /**  발생일  */
  reportedAt: Scalars['DateTime'];
  /**  생성일  */
  createdAt: Scalars['DateTime'];
};

/**  PVESS 유형의 알람  */
export type ITradeAlarmPvess = {
   __typename?: 'ITradeAlarmPVESS';
  /**  PV 유형의 알람  */
  pv: Array<Maybe<TradeAlarmPv>>;
  /**  ESS 유형의 알람  */
  ess: Array<Maybe<TradeAlarmEss>>;
};

/**  WT 유형의 알람  */
export type ITradeAlarmWt = {
   __typename?: 'ITradeAlarmWT';
  wt: Array<Maybe<TradeAlarmWt>>;
};

/**  WT alarms  */
export type TradeAlarmWt = {
   __typename?: 'TradeAlarmWT';
  /**  site ID  */
  siteId: Scalars['ID'];
  /**  site ID  */
  siteName: Scalars['String'];
  /**  발전소 알람 ID  */
  id: Scalars['ID'];
  /**  Wt ID  */
  wtId: Scalars['ID'];
  /**  심각도  */
  severity: Scalars['String'];
  /**  내용  */
  message: Scalars['String'];
  /**  발생일  */
  reportedAt: Scalars['DateTime'];
  /**  생성일  */
  createdAt: Scalars['DateTime'];
};

/**  FC 유형의 알람  */
export type ITradeAlarmFc = {
   __typename?: 'ITradeAlarmFC';
  fc: Array<Maybe<TradeAlarmFc>>;
};

/**  FC alarms  */
export type TradeAlarmFc = {
   __typename?: 'TradeAlarmFC';
  /**  site ID  */
  siteId: Scalars['ID'];
  /**  site ID  */
  siteName: Scalars['String'];
  /**  발전소 알람 ID  */
  id: Scalars['ID'];
  /**  FC ID  */
  fcId: Scalars['ID'];
  /**  심각도  */
  severity: Scalars['String'];
  /**  내용  */
  message: Scalars['String'];
  /**  발생일  */
  reportedAt: Scalars['DateTime'];
  /**  생성일  */
  createdAt: Scalars['DateTime'];
};

/**  Site 의 interface  */
export type ITradeSite = TradeSitePvWrapper | TradeSiteEssWrapper | TradeSitePvessWrapper | TradeSiteWtWrapper | TradeSiteFcWrapper;

/**  PV site 에 대한 고유 정보  */
export type TradeSitePvWrapper = {
   __typename?: 'TradeSitePVWrapper';
  /**  PV  */
  pv?: Maybe<Array<Maybe<TradeSitePv>>>;
};

/**  PV 형 site 에 대한 고유 정보  */
export type TradeSitePv = {
   __typename?: 'TradeSitePV';
  /**  pv 설비 idx  */
  id: Scalars['ID'];
  /**  발전소의 idx  */
  siteId: Scalars['ID'];
  /**  설비 상태값 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstantPv>;
  /**  PV 데이터 수집에 필요한 정보  */
  datasource?: Maybe<TradeDatasourcePv>;
};

/**  현재 발전량  */
export type TradeMeasuresInstantPv = {
   __typename?: 'TradeMeasuresInstantPV';
  /**  날짜  */
  date?: Maybe<Scalars['DateTime']>;
  /**  발전량  */
  watts?: Maybe<Scalars['Float']>;
};

/**  PV 데이터 수집에 필요한 정보  */
export type TradeDatasourcePv = {
   __typename?: 'TradeDatasourcePV';
  /**  id  */
  id: Scalars['ID'];
  /**  PV ID  */
  pvId: Scalars['ID'];
  /**  datasource type ID  */
  datasourceTypeId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  사용여부  */
  isUse: Scalars['Boolean'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

/**  ESS 형 site 에 대한 고유 정보  */
export type TradeSiteEssWrapper = {
   __typename?: 'TradeSiteESSWrapper';
  /**  ESS  */
  ess?: Maybe<Array<Maybe<TradeSiteEss>>>;
};

/**  ESS 형 site 에 대한 고유 정보  */
export type TradeSiteEss = {
   __typename?: 'TradeSiteESS';
  /**  ess 설비 idx  */
  id: Scalars['ID'];
  /**  발전소의 idx  */
  siteId: Scalars['ID'];
  /**  설비 상태값 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  pcs 설비 용량  */
  pcsCapacity?: Maybe<Scalars['Float']>;
  /**  배터리 설비 용량  */
  batteryCapacity?: Maybe<Scalars['Float']>;
  /**  현재 충방전량z  */
  instant?: Maybe<TradeMeasuresInstantEss>;
  /**  ESS 데이터 수집에 필요한 정보  */
  datasource?: Maybe<TradeDatasourceEss>;
};

/**  현재 발전량  */
export type TradeMeasuresInstantEss = {
   __typename?: 'TradeMeasuresInstantESS';
  /**  날짜  */
  date?: Maybe<Scalars['DateTime']>;
  /**  충전량  */
  charge?: Maybe<Scalars['Float']>;
  /**  방전량  */
  discharge?: Maybe<Scalars['Float']>;
};

/**  ESS 데이터 수집 정보  */
export type TradeDatasourceEss = {
   __typename?: 'TradeDatasourceESS';
  /**  id  */
  id: Scalars['ID'];
  /**  ESS ID  */
  essId: Scalars['ID'];
  /**  datasource type ID  */
  datasourceTypeId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  사용여부  */
  isUse: Scalars['Boolean'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

/**  PV + ESS 형 site 에 대한 고유 정보  */
export type TradeSitePvessWrapper = {
   __typename?: 'TradeSitePVESSWrapper';
  /**  PV  */
  pv?: Maybe<Array<Maybe<TradeSitePv>>>;
  /**  ESS  */
  ess?: Maybe<Array<Maybe<TradeSiteEss>>>;
};

export type TradeSiteWtWrapper = {
   __typename?: 'TradeSiteWTWrapper';
  /**  WT  */
  wt?: Maybe<Array<Maybe<TradeSiteWt>>>;
};

/**  WT 형 site 에 대한 고유 정보  */
export type TradeSiteWt = {
   __typename?: 'TradeSiteWT';
  /**  wt 설비 idx  */
  id: Scalars['ID'];
  /**  발전소의 idx  */
  siteId: Scalars['ID'];
  /**  설비 상태값 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstantWt>;
  /**  WT 데이터 수집에 필요한 정보  */
  datasource?: Maybe<TradeDatasourceWt>;
};

/**  현재 발전량  */
export type TradeMeasuresInstantWt = {
   __typename?: 'TradeMeasuresInstantWT';
  /**  날짜  */
  date?: Maybe<Scalars['DateTime']>;
  /**  발전량  */
  watts?: Maybe<Scalars['Float']>;
};

/**  WT 데이터 수집 정보  */
export type TradeDatasourceWt = {
   __typename?: 'TradeDatasourceWT';
  /**  id  */
  id: Scalars['ID'];
  /**  WT ID  */
  wtId: Scalars['ID'];
  /**  datasource type ID  */
  datasourceTypeId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  사용여부  */
  isUse: Scalars['Boolean'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

export type TradeSiteFcWrapper = {
   __typename?: 'TradeSiteFCWrapper';
  /**  FC  */
  fc?: Maybe<Array<Maybe<TradeSiteFc>>>;
};

/**  FC 형 site 에 대한 고유 정보  */
export type TradeSiteFc = {
   __typename?: 'TradeSiteFC';
  /**  fc 설비 idx  */
  id: Scalars['ID'];
  /**  발전소의 idx  */
  siteId: Scalars['ID'];
  /**  설비 상태값 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstantFc>;
};

/**  현재 발전량  */
export type TradeMeasuresInstantFc = {
   __typename?: 'TradeMeasuresInstantFC';
  /**  날짜  */
  date?: Maybe<Scalars['DateTime']>;
  /**  발전량  */
  watts?: Maybe<Scalars['Float']>;
};

/**  기간별 조회 시 사용되는 enum  */
export enum TradeIntervalTypeE {
  /**  시간 단위  */
  Hour = 'HOUR',
  /**  일 단위  */
  Day = 'DAY',
  /**  월 단위  */
  Month = 'MONTH',
  /**  연 단위  */
  Year = 'YEAR'
}

/**  발전소 유형별 응답 container  */
export type ITradeStatsOfSite = TradeStatsOfSitePvWrapper | TradeStatsOfSiteEssWrapper | TradeStatsOfSitePvessWrapper | TradeStatsOfSiteWtWrapper | TradeStatsOfSiteFcWrapper;

/**  PV 형 발전소  */
export type TradeStatsOfSitePvWrapper = {
   __typename?: 'TradeStatsOfSitePVWrapper';
  /**  PV  */
  pv?: Maybe<TradeStatsOfSitePv>;
};

/**  PV 형 발전소  */
export type TradeStatsOfSitePv = {
   __typename?: 'TradeStatsOfSitePV';
  /**  발전량  */
  generations: Array<TradeGeneration>;
  /**  예측 발전량  */
  forecasts: Array<TradeForecast>;
  /**  발전 효율  */
  efficiencies: Array<TradeEfficiency>;
  /**  오류율  */
  errorRates: Array<TradeEfficiency>;
  /**  일사량  */
  irradiations: Array<TradeIrradiation>;
};


/**  PV 형 발전소  */
export type TradeStatsOfSitePvEfficienciesArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
  efficiencyType: TradeEfficiencyTypeE;
};


/**  PV 형 발전소  */
export type TradeStatsOfSitePvErrorRatesArgs = {
  rateType?: Maybe<TradeEfficiencyTypeE>;
};

/**  발전량 통계  */
export type TradeGeneration = {
   __typename?: 'TradeGeneration';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  발전량  */
  watts?: Maybe<Scalars['Float']>;
};

/**  예측 발전량 통계  */
export type TradeForecast = {
   __typename?: 'TradeForecast';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  예측량  */
  watts?: Maybe<Scalars['Float']>;
};

/**  발전 효율 조회 시 사용되는 enum  */
export enum TradeEfficiencyTypeE {
  /**  예측 발전량 대비 발전 효율  */
  Forecast = 'FORECAST',
  /**  발전소 용량 대비 발전 효율  */
  Capacity = 'CAPACITY'
}

/**  발전 효율(용량/예측 대비)  */
export type TradeEfficiency = {
   __typename?: 'TradeEfficiency';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  효율(%)  */
  rate?: Maybe<Scalars['Float']>;
};

/**  일사량  */
export type TradeIrradiation = {
   __typename?: 'TradeIrradiation';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  일사량(megajoule 메가줄 단위)  */
  mj?: Maybe<Scalars['Float']>;
  /**  일사량(watt 와트 단위)  */
  watts?: Maybe<Scalars['Float']>;
};

/**  ESS 형 발전소  */
export type TradeStatsOfSiteEssWrapper = {
   __typename?: 'TradeStatsOfSiteESSWrapper';
  /**  ESS 형 발전소  */
  ess?: Maybe<TradeStatsOfSiteEss>;
};

/**  ESS 형 발전소  */
export type TradeStatsOfSiteEss = {
   __typename?: 'TradeStatsOfSiteESS';
  /**  예측 충방전량  */
  charge: Array<TradeChargeEss>;
  /**  예측 충방전량  */
  forecasts: Array<TradeForecastEss>;
};

/**  ESS 충방전량 통계  */
export type TradeChargeEss = {
   __typename?: 'TradeChargeESS';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  충전량  */
  charge?: Maybe<Scalars['Float']>;
  /**  방전량  */
  discharge?: Maybe<Scalars['Float']>;
};

/**  예측 충방전량 통계  */
export type TradeForecastEss = {
   __typename?: 'TradeForecastESS';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  예측 충전량  */
  charge?: Maybe<Scalars['Float']>;
  /**  예측 방전량  */
  discharge?: Maybe<Scalars['Float']>;
};

/**  PV+ESS 형 발전소  */
export type TradeStatsOfSitePvessWrapper = {
   __typename?: 'TradeStatsOfSitePVESSWrapper';
  /**  PV 통계  */
  pv?: Maybe<TradeStatsOfSitePv>;
  /**  ESS 통계  */
  ess?: Maybe<TradeStatsOfSiteEss>;
};

/**  WT 형 발전소  */
export type TradeStatsOfSiteWtWrapper = {
   __typename?: 'TradeStatsOfSiteWTWrapper';
  /**  WT  */
  wt?: Maybe<TradeStatsOfSiteWt>;
};

/**  WT 형 발전소  */
export type TradeStatsOfSiteWt = {
   __typename?: 'TradeStatsOfSiteWT';
  /**  발전량  */
  generations: Array<TradeGeneration>;
  /**  예측 발전량  */
  forecasts: Array<TradeForecast>;
  /**  발전 효율  */
  efficiencies: Array<TradeEfficiency>;
  /**  오류율  */
  errorRates: Array<TradeEfficiency>;
};


/**  WT 형 발전소  */
export type TradeStatsOfSiteWtEfficienciesArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
  efficiencyType: TradeEfficiencyTypeE;
};


/**  WT 형 발전소  */
export type TradeStatsOfSiteWtErrorRatesArgs = {
  rateType?: Maybe<TradeEfficiencyTypeE>;
};

/**  FC 형 발전소  */
export type TradeStatsOfSiteFcWrapper = {
   __typename?: 'TradeStatsOfSiteFCWrapper';
  /**  FC  */
  fc?: Maybe<TradeStatsOfSiteFc>;
};

/**  FC 형 발전소  */
export type TradeStatsOfSiteFc = {
   __typename?: 'TradeStatsOfSiteFC';
  /**  발전량  */
  generations: Array<TradeGeneration>;
};

/**  정산금  */
export type TradeSettlement = {
   __typename?: 'TradeSettlement';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  발전기 발전량  */
  watts: Scalars['Float'];
  /**  ess 방전량  */
  discharge: Scalars['Float'];
  /**  발전기 SMP  */
  smp: Scalars['Float'];
  /**  발전기 REC  */
  rec: Scalars['Float'];
  /**  ESS REC  */
  essREC: Scalars['Float'];
  /**  정산금 계  */
  settlement: Scalars['Float'];
};

/**  발전소의 집합자원 월별 참여 현황  */
export type TradeMapperGroupSiteMonthly = {
   __typename?: 'TradeMapperGroupSiteMonthly';
  /**  집합자원 id  */
  groupId?: Maybe<Scalars['ID']>;
  /**  집합자원 명  */
  groupName?: Maybe<Scalars['String']>;
  /**  사이트 ID  */
  siteId?: Maybe<Scalars['ID']>;
  /**  참여 날짜(월단위)  */
  date?: Maybe<Scalars['DateTime']>;
};

/**  발전소 유형별 contracts  */
export type ITradeContracts = ITradeContractPv | ITradeContractEss | ITradeContractPvess | ITradeContractWt | ITradeContractFc;

/**  pv 유형의 자원정보  */
export type ITradeContractPv = {
   __typename?: 'ITradeContractPV';
  pv?: Maybe<Array<Maybe<TradeContractPv>>>;
};

/**  REC 거래정보(자원 REC 정보)  */
export type TradeContractPv = {
   __typename?: 'TradeContractPV';
  /**  pv REC 계약 ID  */
  id: Scalars['ID'];
  /**  pvs ID  */
  pvId: Scalars['ID'];
  /**  전력거래대상(kpx/kepco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  거래타입 명(계약방식)  */
  name?: Maybe<Scalars['String']>;
  /**  거래 상세(계약내용)  */
  detail?: Maybe<Scalars['String']>;
  /**  등록일  */
  createdAt: Scalars['DateTime'];
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/**  ESS 유형의 REC 자원정보  */
export type ITradeContractEss = {
   __typename?: 'ITradeContractESS';
  ess?: Maybe<Array<Maybe<TradeContractEss>>>;
};

/**  ESS REC 거래정보 (자원 REC 정보)  */
export type TradeContractEss = {
   __typename?: 'TradeContractESS';
  /**  ESS REC 계약 ID  */
  id: Scalars['ID'];
  /**  ess ID  */
  essId: Scalars['ID'];
  /**  전력거래대상(kpx/kepco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  ess 기여도  */
  contributionRate: Scalars['Float'];
  /**  거래타입 명 (계약방식)  */
  name?: Maybe<Scalars['String']>;
  /**  거래 상세(계약내용)  */
  detail?: Maybe<Scalars['String']>;
  /**  등록일  */
  createdAt: Scalars['DateTime'];
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/**  PVESS 유형의 REC 자원정보  */
export type ITradeContractPvess = {
   __typename?: 'ITradeContractPVESS';
  pv?: Maybe<Array<Maybe<TradeContractPv>>>;
  ess?: Maybe<Array<Maybe<TradeContractEss>>>;
};

/**  WT 유형의 REC 자원정보  */
export type ITradeContractWt = {
   __typename?: 'ITradeContractWT';
  wt?: Maybe<Array<Maybe<TradeContractWt>>>;
};

/**  REC 거래정보(자원 REC 정보)  */
export type TradeContractWt = {
   __typename?: 'TradeContractWT';
  /**  wt REC 계약 ID  */
  id: Scalars['ID'];
  /**  wt ID  */
  wtId: Scalars['ID'];
  /**  전력거래대상(kpx/kewco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  거래타입 명(계약방식)  */
  name?: Maybe<Scalars['String']>;
  /**  거래 상세(계약내용)  */
  detail?: Maybe<Scalars['String']>;
  /**  등록일  */
  createdAt: Scalars['DateTime'];
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/**  FC 유형의 REC 자원정보  */
export type ITradeContractFc = {
   __typename?: 'ITradeContractFC';
  fc?: Maybe<Array<Maybe<TradeContractFc>>>;
};

/**  REC 거래정보(자원 REC 정보)  */
export type TradeContractFc = {
   __typename?: 'TradeContractFC';
  /**  fc REC 계약 ID  */
  id: Scalars['ID'];
  /**  fc ID  */
  fcId: Scalars['ID'];
  /**  전력거래대상(kpx/kepco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  거래타입 명(계약방식)  */
  name?: Maybe<Scalars['String']>;
  /**  거래 상세(계약내용)  */
  detail?: Maybe<Scalars['String']>;
  /**  등록일  */
  createdAt: Scalars['DateTime'];
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/**  발전소 상태 현황  */
export type TradeSiteState = {
   __typename?: 'TradeSiteState';
  /**  발전소 상태  */
  stateId: Scalars['String'];
  /**  발전소 수  */
  count: Scalars['Int'];
};

/**  발전소 alarms  */
export type TradeAlarm = {
   __typename?: 'TradeAlarm';
  /**  PV 의 alarm 목록  */
  pv: Array<Maybe<TradeAlarmPv>>;
  /**  ESS 의 alarm 목록  */
  ess: Array<Maybe<TradeAlarmEss>>;
  /**  WT 의 alarm 목록  */
  wt: Array<Maybe<TradeAlarmWt>>;
  /**  FC 의 alarm 목록  */
  fc: Array<Maybe<TradeAlarmFc>>;
};

/**  통계  */
export type TradeStats = {
   __typename?: 'TradeStats';
  /**  PV  */
  pv?: Maybe<TradeStatsOfSitePv>;
  /**  ESS  */
  ess?: Maybe<TradeStatsOfSiteEss>;
  /**  WT  */
  wt?: Maybe<TradeStatsOfSiteWt>;
  /**  FC  */
  fc?: Maybe<TradeStatsOfSiteFc>;
};

/**  발전소 rec 자원 거래정보  */
export type TradeFacilityContract = {
   __typename?: 'TradeFacilityContract';
  /**  pv 의 rec 거래정보  */
  pv: Array<Maybe<TradeContractPv>>;
  /**  ess 의 rec 거래정보  */
  ess: Array<Maybe<TradeContractEss>>;
  /**  wt 의 rec 거래정보  */
  wt: Array<Maybe<TradeContractWt>>;
  /**  fc 의 rec 거래정보  */
  fc: Array<Maybe<TradeContractFc>>;
};

/**  현재 발전량  */
export type TradeMeasuresInstant = {
   __typename?: 'TradeMeasuresInstant';
  pv?: Maybe<TradeMeasuresInstantPv>;
  ess?: Maybe<TradeMeasuresInstantEss>;
  wt?: Maybe<TradeMeasuresInstantWt>;
  fc?: Maybe<TradeMeasuresInstantFc>;
};

/**  대리점  */
export type TradeAgency = {
   __typename?: 'TradeAgency';
  /**  대리점 ID  */
  id: Scalars['ID'];
  /**  상위 중개사업자 ID  */
  brokerId: Scalars['String'];
  /**  대리점 명  */
  name: Scalars['String'];
  /**  대표자  */
  owner?: Maybe<Scalars['String']>;
  /**  대표번호  */
  tel?: Maybe<Scalars['String']>;
  /**  사업자번호  */
  businessNumber?: Maybe<Scalars['String']>;
  /**  수수료 율  */
  commissionRate?: Maybe<Scalars['Int']>;
  /**  보유 전력 자원수  */
  count: TradeCount;
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /**  대리점 하위 발전소의 전체 용량  */
  capacity: TradeCapacity;
  /**  대리점이 관리하는 발전사업자 목록  */
  generators?: Maybe<Array<Maybe<TradeGenerator>>>;
  /**  대리점이 관리하는 발전사업자  */
  generator?: Maybe<TradeGenerator>;
  /**  대리점의 사이트 목록  */
  sites?: Maybe<Array<Maybe<TradeSite>>>;
  /**  대리점 하위 사이트  */
  site?: Maybe<TradeSite>;
  /**  대리점의 사이트 상태 현황  */
  siteStates?: Maybe<Array<Maybe<TradeSiteState>>>;
  /**  대리점 site 의 alarm 목록(이벤트 로그)  */
  alarms: TradeAlarm;
  /**  통계  */
  stats?: Maybe<TradeStats>;
  /**  설비별 계약정보  */
  contracts?: Maybe<TradeFacilityContract>;
  /**  점검이력 조회  */
  inspectionLog?: Maybe<TradeInspectionLog>;
  /**  점검이력 목록 조회  */
  inspectionLogs?: Maybe<Array<Maybe<TradeInspectionLog>>>;
  /**  게시글 조회  */
  board?: Maybe<TradeBoard>;
  /**  게시글 목록 조회  */
  boards?: Maybe<Array<Maybe<TradeBoard>>>;
  /**  POSCO 한정 RM 에 저장되어있는 message  */
  status?: Maybe<Array<Maybe<TradeStatusOfRmUsers>>>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstant>;
};


/**  대리점  */
export type TradeAgencyCountArgs = {
  type: TradeStateTypeE;
};


/**  대리점  */
export type TradeAgencyCapacityArgs = {
  type: TradeStateTypeE;
};


/**  대리점  */
export type TradeAgencyGeneratorArgs = {
  id: Scalars['ID'];
};


/**  대리점  */
export type TradeAgencySiteArgs = {
  id: Scalars['ID'];
};


/**  대리점  */
export type TradeAgencyAlarmsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  대리점  */
export type TradeAgencyStatsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  대리점  */
export type TradeAgencyInspectionLogArgs = {
  id: Scalars['ID'];
};


/**  대리점  */
export type TradeAgencyInspectionLogsArgs = {
  from: Scalars['Date'];
  to: Scalars['Date'];
};


/**  대리점  */
export type TradeAgencyBoardArgs = {
  id: Scalars['ID'];
};


/**  대리점  */
export type TradeAgencyStatusArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

/**  발전사업자  */
export type TradeGenerator = {
   __typename?: 'TradeGenerator';
  /**  ID, 시스템 발급 auto increment  */
  id: Scalars['ID'];
  /**  대리점 ID  */
  agencyId: Scalars['ID'];
  /**  대리점 명  */
  agencyName: Scalars['String'];
  /**  발전사업자 명  */
  name: Scalars['String'];
  /**  발전사업자 소유주  */
  owner?: Maybe<Scalars['String']>;
  /**  발전사업자 연락처  */
  tel?: Maybe<Scalars['String']>;
  /**  발전사업자 사업자번호  */
  businessNumber?: Maybe<Scalars['String']>;
  /**  수수료 율  */
  commissionRate?: Maybe<Scalars['Int']>;
  /**  보유 전력 자원수  */
  count: TradeCount;
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
  /**  발전사업자 하위 발전소의 전체 용량  */
  capacity: TradeCapacity;
  /**  발전사업자의 사이트 목록  */
  sites?: Maybe<Array<Maybe<TradeSite>>>;
  /**  발전사업자 하위 사이트  */
  site?: Maybe<TradeSite>;
  /**  발전사업자의 사이트 상태 현황  */
  siteStates?: Maybe<Array<Maybe<TradeSiteState>>>;
  /**  발전사업자 site 의 alarm 목록(이벤트 로그)  */
  alarms: TradeAlarm;
  /**  통계  */
  stats?: Maybe<TradeStats>;
  /**  REC 계약조건  */
  contracts?: Maybe<TradeFacilityContract>;
  /**  점검이력 조회  */
  inspectionLog?: Maybe<TradeInspectionLog>;
  /**  점검이력 목록 조회  */
  inspectionLogs?: Maybe<Array<Maybe<TradeInspectionLog>>>;
  /**  게시글 조회  */
  board?: Maybe<TradeBoard>;
  /**  게시글 목록 조회  */
  boards?: Maybe<Array<Maybe<TradeBoard>>>;
  /**  POSCO 한정 RM 에 저장되어있는 message  */
  status?: Maybe<Array<Maybe<TradeStatusOfRmUsers>>>;
  /**  현재 발전량  */
  instant?: Maybe<TradeMeasuresInstant>;
};


/**  발전사업자  */
export type TradeGeneratorCountArgs = {
  type: TradeStateTypeE;
};


/**  발전사업자  */
export type TradeGeneratorCapacityArgs = {
  type: TradeStateTypeE;
};


/**  발전사업자  */
export type TradeGeneratorSiteArgs = {
  id: Scalars['ID'];
};


/**  발전사업자  */
export type TradeGeneratorAlarmsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};


/**  발전사업자  */
export type TradeGeneratorStatsArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
  interval: TradeIntervalTypeE;
};


/**  발전사업자  */
export type TradeGeneratorInspectionLogArgs = {
  id: Scalars['ID'];
};


/**  발전사업자  */
export type TradeGeneratorInspectionLogsArgs = {
  from: Scalars['Date'];
  to: Scalars['Date'];
};


/**  발전사업자  */
export type TradeGeneratorBoardArgs = {
  id: Scalars['ID'];
};


/**  발전사업자  */
export type TradeGeneratorStatusArgs = {
  from: Scalars['DateTime'];
  to: Scalars['DateTime'];
};

/**  점검이력  */
export type TradeInspectionLog = {
   __typename?: 'TradeInspectionLog';
  /**  점검이력 ID  */
  id: Scalars['ID'];
  /**  점검일 && 발생일자  */
  date: Scalars['Date'];
  /**  점검구분  */
  type: Scalars['ID'];
  /**  담당자  */
  manager: Scalars['String'];
  /**  작성자  */
  writer: Scalars['String'];
  /**  발전소 id  */
  siteId: Scalars['ID'];
  /**  설비구분 id  */
  facilityTypeId: Scalars['ID'];
  /**  내용  */
  content: Scalars['String'];
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type TradeBoard = {
   __typename?: 'TradeBoard';
  /**  게시판 id  */
  id?: Maybe<Scalars['ID']>;
  /**  중개사업자 id  */
  brokerId: Scalars['ID'];
  /**  작성자  */
  writer: Scalars['String'];
  /**  제목  */
  title: Scalars['String'];
  /**  내용  */
  content: Scalars['String'];
  /**  첨부파일  */
  files?: Maybe<Array<Maybe<File>>>;
  /**  첨부파일 유무  */
  isFileExist: Scalars['Boolean'];
  /**  조회 수  */
  readCount?: Maybe<Scalars['Int']>;
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
};

/**  위성 서비스의 상태값  */
export type TradeStatusOfRmUsers = {
   __typename?: 'TradeStatusOfRMUsers';
  /**  RM 의 USER 명  */
  name: Scalars['String'];
  /**  RM 의 USER 가 전송한 값  */
  message?: Maybe<Scalars['JSON']>;
  /**  message 생성 시각  */
  createdAt: Scalars['DateTime'];
  /**  진단수행일시  */
  date?: Maybe<Scalars['DateTime']>;
  /**  분산자원명  */
  siteName?: Maybe<Scalars['String']>;
  /**  판별방식  */
  discernType?: Maybe<Scalars['String']>;
  /**  진단결과  */
  diagnosisResult?: Maybe<Scalars['String']>;
  /**  고장종류  */
  faultType?: Maybe<Scalars['String']>;
};

/**  smp 구매처  */
export type TradeSmpBuyer = {
   __typename?: 'TradeSmpBuyer';
  /**  SMP 구매처 id  */
  id?: Maybe<Scalars['ID']>;
  /**  smp 구매처  */
  name?: Maybe<Scalars['String']>;
};

/**  Trade 유저  */
export type TradeUser = Node & User & {
   __typename?: 'TradeUser';
  /**  유저 UUID  */
  id: Scalars['ID'];
  /**  E-MAIL  */
  email: Scalars['String'];
  /**  E-MAIL 인증 여부  */
  emailVerified: Scalars['Boolean'];
  /**  이름  */
  name?: Maybe<Scalars['String']>;
  /**  폰번호  */
  phone?: Maybe<Scalars['String']>;
  /**  사진 URL  */
  photoURL?: Maybe<Scalars['String']>;
  /**  비활성화 여부  */
  disabled: Scalars['Boolean'];
  /**  유저 생성일  */
  createdAt: Scalars['DateTime'];
  /**  소속된 중개사업자  */
  broker?: Maybe<TradeBroker>;
  /**  로그인 시, 해당 유저 role 에 해당하는 type 같이 넘기기  */
  role?: Maybe<ITradeType>;
  /**  소속된 사업자 타입  */
  type: Scalars['String'];
  /**  로그인 한 유저의 서비스 플랫폼  */
  platform?: Maybe<Scalars['String']>;
};

/**  타입 interface  */
export type ITradeType = TradeBroker | TradeAgency | TradeGenerator;

/**  Trade 유저 목록  */
export type TradeUserList = {
   __typename?: 'TradeUserList';
  /**  총 유저 수  */
  total: Scalars['Int'];
  /**  몇번째 부터  */
  offset: Scalars['Int'];
  /**  몇번째 까지  */
  limit: Scalars['Int'];
  /**  유저 목록  */
  entries: Array<TradeUser>;
};

/**  SMP  */
export type TradeSmp = {
   __typename?: 'TradeSMP';
  /**  연월일 또는 연월  */
  date: Scalars['Date'];
  /**  시간, nullable  */
  hour?: Maybe<Scalars['Int']>;
  /**  지역코드 육지 : 1, 제주 : 9  */
  areaCode: Scalars['String'];
  /**  price  */
  smp: Scalars['Float'];
};

/**  REC  */
export type TradeRec = {
   __typename?: 'TradeREC';
  /**  연월일 또는 연월  */
  date: Scalars['Date'];
  /**  지역코드 육지 : 1, 제주 : 9  */
  areaCode: Scalars['String'];
  /**  min rec  */
  min: Scalars['Float'];
  /**  min rec  */
  max: Scalars['Float'];
  /**  min rec  */
  avg: Scalars['Float'];
};

/**  Data Source 유형  */
export type TradeDatasourceType = {
   __typename?: 'TradeDatasourceType';
  /**  아이디  */
  id: Scalars['ID'];
  /**  이름  */
  name: Scalars['String'];
  datasources?: Maybe<Array<Maybe<TradeDatasource>>>;
};

/**  Data Source  */
export type TradeDatasource = {
   __typename?: 'TradeDatasource';
  /**  아이디  */
  id: Scalars['ID'];
  /**  Data Source Type (1:웹크롤링, 2:API, 3:RTU, 4:없음)  */
  datasourceTypeId: Scalars['ID'];
  /**  시설 유형  */
  facilityTypeId: Scalars['ID'];
  /**  이름  */
  name: Scalars['String'];
  /**  Data Source 가 필수로 취하는 값 schema  */
  requiredFields?: Maybe<Scalars['JSON']>;
};

/**  Trade 공통 데이터  */
export type TradeCommon = {
   __typename?: 'TradeCommon';
  /**  smp 구매처 목록  */
  smpBuyers?: Maybe<Array<Maybe<TradeSmpBuyer>>>;
  /**  발전소 디바이스 타입  */
  facilityTypes?: Maybe<Array<Maybe<TradeFacilityType>>>;
  /**  발전소, 설비 상태  */
  facilityState?: Maybe<Array<Maybe<TradeFacilityState>>>;
  /**  REC 계약 방식  */
  contractTypes: Array<Maybe<TradeContractType>>;
  /**  점검이력 구분  */
  inspectionTypes?: Maybe<Array<Maybe<TradeInspectionType>>>;
};

/**  발전소 디바이스 타입  */
export type TradeFacilityType = {
   __typename?: 'TradeFacilityType';
  /**  facility_types.id  */
  id: Scalars['ID'];
  /**  발전설비모델명  */
  name: Scalars['String'];
};

/**  발전소, 설비상태   */
export type TradeFacilityState = {
   __typename?: 'TradeFacilityState';
  /**  facility_state.id  */
  id: Scalars['ID'];
  /**  상태  */
  name: Scalars['String'];
  /**  설명  */
  description?: Maybe<Scalars['String']>;
};

/**  REC 계약 방식  */
export type TradeContractType = {
   __typename?: 'TradeContractType';
  /**  REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  REC 계약 type  */
  type?: Maybe<Scalars['String']>;
  /**  REC 계약 이름  */
  name?: Maybe<Scalars['String']>;
  /**  REC 계약 상세  */
  detail?: Maybe<Scalars['String']>;
};

/**  점검 이력 구분  */
export type TradeInspectionType = {
   __typename?: 'TradeInspectionType';
  /**  점검 구분 ID  */
  id: Scalars['ID'];
  /**  점검 구분 명  */
  type: Scalars['String'];
};

/** 데이터를 변화시키는 필드 엔트리 */
export type Mutation = {
   __typename?: 'Mutation';
  /** 내부용 */
  admin: AdminMutation;
  pm?: Maybe<PmMutation>;
  /** 파일 업로드 (인증 필요) */
  uploadFile: File;
  dr?: Maybe<DrMutation>;
  /**  통합모니터링 root mutation  */
  trade?: Maybe<TradeMutation>;
};


/** 데이터를 변화시키는 필드 엔트리 */
export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};

/** 디버깅 및 API 콘솔용 뮤테이션 (내부용) */
export type AdminMutation = {
   __typename?: 'AdminMutation';
  /** 이벤트 발행 */
  emit: Scalars['JSON'];
  /** 이벤트 발행 */
  broadcast: Scalars['JSON'];
  /** 내부 캐시 삭제 */
  clearCache?: Maybe<Scalars['Boolean']>;
  /** IAM 뮤테이션 엔트리 */
  iam: IamMutation;
  /**  관리자 문서 생성 또는 수정  */
  updateDocument: AdminDocument;
  i18n: MolApIi18nMutation;
  file: FileMutation;
};


/** 디버깅 및 API 콘솔용 뮤테이션 (내부용) */
export type AdminMutationEmitArgs = {
  event: Scalars['String'];
  groups?: Maybe<Array<Scalars['String']>>;
  payload: Scalars['JSON'];
};


/** 디버깅 및 API 콘솔용 뮤테이션 (내부용) */
export type AdminMutationBroadcastArgs = {
  event: Scalars['String'];
  groups?: Maybe<Array<Scalars['String']>>;
  payload: Scalars['JSON'];
};


/** 디버깅 및 API 콘솔용 뮤테이션 (내부용) */
export type AdminMutationClearCacheArgs = {
  keys: Array<Scalars['String']>;
};


/** 디버깅 및 API 콘솔용 뮤테이션 (내부용) */
export type AdminMutationUpdateDocumentArgs = {
  id: Scalars['String'];
  content: Scalars['String'];
};

export type IamMutation = {
   __typename?: 'IAMMutation';
  /** 사용자 생성 */
  create: IamUser;
  /** 사용자 수정 */
  update: IamUser;
  /** 사용자 삭제 */
  remove: Scalars['String'];
  /** 사용자 활성화/비활성화 */
  disable: IamUser;
  /** 사용자 비밀번호 변경 이메일 발송 */
  sendPasswordResetEmail: Scalars['String'];
};


export type IamMutationCreateArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  emailVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
};


export type IamMutationUpdateArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
};


export type IamMutationRemoveArgs = {
  id: Scalars['ID'];
};


export type IamMutationDisableArgs = {
  id: Scalars['ID'];
  status: Scalars['Boolean'];
};


export type IamMutationSendPasswordResetEmailArgs = {
  email: Scalars['String'];
};

export type MolApIi18nMutation = {
   __typename?: 'MolAPIi18nMutation';
  updateValidationErrors: Array<MolApiValidationError>;
};


export type MolApIi18nMutationUpdateValidationErrorsArgs = {
  entries: Array<MolApiValidationErrorPayload>;
};

export type MolApiValidationErrorPayload = {
  /** Set id to update, or create new one. */
  id?: Maybe<Scalars['ID']>;
  lang: Scalars['String'];
  type: Scalars['String'];
  actionPattern: Scalars['String'];
  fieldPattern: Scalars['String'];
  message: Scalars['String'];
};

export type FileMutation = {
   __typename?: 'FileMutation';
  /** 파일 업로드 */
  upload: File;
  /** 파일 수정 */
  update: File;
  /** 파일 삭제 */
  remove: Scalars['ID'];
};


export type FileMutationUploadArgs = {
  file: Scalars['Upload'];
};


export type FileMutationUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
};


export type FileMutationRemoveArgs = {
  id: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutation = {
   __typename?: 'PmMutation';
  /**
   *  dummy 
   * @deprecated Not meant for use!
   */
  dummy?: Maybe<Scalars['JSON']>;
  /** ADMIN ACTION: 참여고객에 상품 추가함 */
  contractAddServicePlan?: Maybe<Scalars['JSON']>;
  contractUpdateServicePlan?: Maybe<Scalars['JSON']>;
  contractDeleteServicePlan?: Maybe<Scalars['JSON']>;
  contractConnectEims?: Maybe<PmContract>;
  createUser?: Maybe<PmUser>;
  refreshToken?: Maybe<Token>;
  deleteUser?: Maybe<Scalars['JSON']>;
  changeUserPass?: Maybe<Scalars['JSON']>;
  /** update logged in user */
  saveMyInfo?: Maybe<PmUser>;
  /**  Add contract to the current user  */
  contractAdd?: Maybe<PmContract>;
  contractDelete?: Maybe<PmContract>;
  contractSetChildKcust?: Maybe<Scalars['JSON']>;
  contractUpdateIsmartPw?: Maybe<Scalars['JSON']>;
  contractUpdate?: Maybe<PmContract>;
  /** removes userId from contract(id) */
  contractUserRemove?: Maybe<Scalars['JSON']>;
  /** sends password reset email to userId if user belongs to contract(id) */
  contractUserPassReset?: Maybe<Scalars['JSON']>;
  /** invites userEmail to contract(id) */
  contractUserInvite?: Maybe<Scalars['JSON']>;
  contractTargetPeakUpdate?: Maybe<PmContractWattThreshold>;
  contractNotiConfigUpdate?: Maybe<PmContractNotiConfig>;
  getIsmartDetail?: Maybe<Scalars['JSON']>;
  /**  request analysis report  */
  requestAnalysis?: Maybe<Scalars['JSON']>;
  /**  request downloading analysis dataset file if available  */
  requestFileDownload?: Maybe<Scalars['String']>;
  deleteReport?: Maybe<Scalars['JSON']>;
  updateAnalysisAnnotation?: Maybe<Scalars['JSON']>;
};


/**  PM root mutation  */
export type PmMutationContractAddServicePlanArgs = {
  contractId: Scalars['ID'];
  serviceId: Scalars['ID'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationContractUpdateServicePlanArgs = {
  id: Scalars['ID'];
  contractId: Scalars['ID'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationContractDeleteServicePlanArgs = {
  id: Scalars['ID'];
  contractId: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationContractConnectEimsArgs = {
  contractId: Scalars['ID'];
  eimsContractId: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationCreateUserArgs = {
  input?: Maybe<PmUserPayload>;
};


/**  PM root mutation  */
export type PmMutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationDeleteUserArgs = {
  id: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationChangeUserPassArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationSaveMyInfoArgs = {
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


/**  PM root mutation  */
export type PmMutationContractAddArgs = {
  kepcoCode: Scalars['String'];
  ismartPw: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};


/**  PM root mutation  */
export type PmMutationContractDeleteArgs = {
  id: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationContractSetChildKcustArgs = {
  id: Scalars['ID'];
  children: Array<Scalars['String']>;
};


/**  PM root mutation  */
export type PmMutationContractUpdateIsmartPwArgs = {
  id: Scalars['ID'];
  kepcoCode: Scalars['String'];
  ismartPw: Scalars['String'];
  isParent: Scalars['Boolean'];
};


/**  PM root mutation  */
export type PmMutationContractUpdateArgs = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};


/**  PM root mutation  */
export type PmMutationContractUserRemoveArgs = {
  id: Scalars['ID'];
  userId: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationContractUserPassResetArgs = {
  id: Scalars['ID'];
  userId: Scalars['ID'];
};


/**  PM root mutation  */
export type PmMutationContractUserInviteArgs = {
  id: Scalars['ID'];
  email: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationContractTargetPeakUpdateArgs = {
  id: Scalars['ID'];
  thresholdId?: Maybe<Scalars['ID']>;
  val?: Maybe<Scalars['Float']>;
};


/**  PM root mutation  */
export type PmMutationContractNotiConfigUpdateArgs = {
  id: Scalars['ID'];
  alertId: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  notiTime?: Maybe<Scalars['String']>;
};


/**  PM root mutation  */
export type PmMutationGetIsmartDetailArgs = {
  id: Scalars['ID'];
  kepcoCode: Scalars['String'];
  ismartPw: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationRequestAnalysisArgs = {
  ismartId: Scalars['String'];
  ismartPw: Scalars['String'];
  contractId?: Maybe<Scalars['ID']>;
};


/**  PM root mutation  */
export type PmMutationRequestFileDownloadArgs = {
  id: Scalars['ID'];
  type: Scalars['String'];
};


/**  PM root mutation  */
export type PmMutationDeleteReportArgs = {
  id: Scalars['ID'];
  contractId?: Maybe<Scalars['ID']>;
};


/**  PM root mutation  */
export type PmMutationUpdateAnalysisAnnotationArgs = {
  analysisId: Scalars['ID'];
  patternId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
};

/**  PM User Payload  */
export type PmUserPayload = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirm: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  refCode?: Maybe<Scalars['String']>;
};

/** General Tokens */
export type Token = {
   __typename?: 'Token';
  idToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

/**  Dr root query  */
export type DrMutation = {
   __typename?: 'DrMutation';
  updateCustomer?: Maybe<Scalars['ID']>;
  updateAppPushSetting?: Maybe<Scalars['String']>;
  createReductionBid?: Maybe<Scalars['ID']>;
};


/**  Dr root query  */
export type DrMutationUpdateCustomerArgs = {
  input: DrCustomerPayload;
};


/**  Dr root query  */
export type DrMutationUpdateAppPushSettingArgs = {
  input: DrUserAppPushSettingPayload;
};


/**  Dr root query  */
export type DrMutationCreateReductionBidArgs = {
  input: DrReductionBidPayload;
};

/**  참여고객 등록 / 수정 payload  */
export type DrCustomerPayload = {
  /**  참여고객 id  */
  id: Scalars['ID'];
  /**  적용전력  */
  applyCapacity: Scalars['Float'];
};

/**  유저 알림 수신 설정 생성/수정 양식  */
export type DrUserAppPushSettingPayload = {
  /**  참여고객 유저 로그인 id  */
  loginId: Scalars['String'];
  /**  수요감축요청 지시  */
  dispatchedReductionOrder: DrAppPushSetting;
  /**  계획감축 대기  */
  scheduledReductionReady: DrAppPushSetting;
  /**  수요감축요청 발령예상 알림  */
  dispatchedReductionPrediction: DrAppPushSetting;
};

/** 계획감축 입력 */
export type DrReductionBidPayload = {
  /**  계획감축 입찰 번호  */
  id?: Maybe<Scalars['ID']>;
  /**  참여고객 ID  */
  customerId: Scalars['ID'];
  /** 입찰일 */
  reductionBidDate: Scalars['DateTime'];
  /** 참고일 */
  referenceDate: Scalars['DateTime'];
  /** 총 입찰시간 */
  biddingHour: Scalars['Float'];
  /** 총 입찰용량 */
  biddingWattage: Scalars['Float'];
  /** 시간별 입찰내용 */
  intervals: Array<DrReductionBidIntervalPayload>;
};

/** 계획감축 인터벌 입력 */
export type DrReductionBidIntervalPayload = {
  /** 시간 */
  hour: Scalars['String'];
  /** 입찰용량 */
  biddingWattage: Scalars['Float'];
  /** cbl */
  cbl: Scalars['Float'];
};

/**  Trade root query  */
export type TradeMutation = {
   __typename?: 'TradeMutation';
  /**  입찰서 생성  */
  createBid: TradeBid;
  /**  게시판 생성  */
  createBoard?: Maybe<Scalars['ID']>;
  /**  게시판 수정  */
  updateBoard?: Maybe<Scalars['ID']>;
  /**  게시판 삭제  */
  deleteBoard?: Maybe<Scalars['ID']>;
  /**  ESS REC 거래 정보 등록  */
  createContractESS?: Maybe<TradeContractEss>;
  /**  ESS REC 거래 정보 수정  */
  updateContractESS?: Maybe<TradeContractEss>;
  /**  ESS REC 거래 정보 삭제  */
  deleteContractESS?: Maybe<Scalars['ID']>;
  /**  FC REC 거래 정보 등록  */
  createContractFC?: Maybe<TradeContractFc>;
  /**  FC REC 거래 정보 수정  */
  updateContractFC?: Maybe<TradeContractFc>;
  /**  FC REC 거래 정보 삭제  */
  deleteContractFC?: Maybe<Scalars['ID']>;
  /**  PV REC 거래 정보 등록  */
  createContractPV?: Maybe<TradeContractPv>;
  /**  PV REC 거래 정보 수정  */
  updateContractPV?: Maybe<TradeContractPv>;
  /**  PV REC 거래 정보 삭제  */
  deleteContractPV?: Maybe<Scalars['ID']>;
  /**  REC 거래 정보 등록  */
  createContract?: Maybe<Scalars['ID']>;
  /**  REC 거래 정보 수정  */
  updateContract?: Maybe<Scalars['ID']>;
  /**  REC 거래 정보 삭제  */
  deleteContract?: Maybe<Scalars['ID']>;
  /**  WT REC 거래 정보 등록  */
  createContractWT?: Maybe<TradeContractWt>;
  /**  WT REC 거래 정보 수정  */
  updateContractWT?: Maybe<TradeContractWt>;
  /**  WT REC 거래 정보 삭제  */
  deleteContractWT?: Maybe<Scalars['ID']>;
  /**  ESS 데이터 수집에 필요한 정보 생성  */
  createDatasourceESS?: Maybe<Scalars['ID']>;
  /**  ESS 데이터 수집에 필요한 정보 수정  */
  updateDatasourceESS?: Maybe<Scalars['ID']>;
  /**  ESS 데이터 수집에 필요한 정보 삭제  */
  deleteDatasourceESS?: Maybe<Scalars['ID']>;
  /**  PV 데이터 수집에 필요한 정보 생성  */
  createDatasourcePV?: Maybe<Scalars['ID']>;
  /**  PV 데이터 수집에 필요한 정보 수정  */
  updateDatasourcePV?: Maybe<Scalars['ID']>;
  /**  PV 데이터 수집에 필요한 정보 삭제  */
  deleteDatasourcePV?: Maybe<Scalars['ID']>;
  /**  WT 데이터 수집에 필요한 정보 생성  */
  createDatasourceWT?: Maybe<Scalars['ID']>;
  /**  WT 데이터 수집에 필요한 정보 수정  */
  updateDatasourceWT?: Maybe<Scalars['ID']>;
  /**  WT 데이터 수집에 필요한 정보 삭제  */
  deleteDatasourceWT?: Maybe<Scalars['ID']>;
  /**  ESS 형 site 생성  */
  createSiteESS?: Maybe<Scalars['ID']>;
  /**  ESS 형 site 수정  */
  updateSiteESS?: Maybe<Scalars['ID']>;
  /**  ESS 형 site 삭제  */
  deleteSiteESS?: Maybe<Scalars['ID']>;
  /**  FC 형 site 생성  */
  createSiteFC?: Maybe<Scalars['ID']>;
  /**  FC 형 site 수정  */
  updateSiteFC: Scalars['ID'];
  /**  FC 형 site 삭제  */
  deleteSiteFC?: Maybe<Scalars['ID']>;
  /**  PV 형 site 생성  */
  createSitePV?: Maybe<Scalars['ID']>;
  /**  PV 형 site 수정  */
  updateSitePV?: Maybe<Scalars['ID']>;
  /**  PV 형 site 삭제  */
  deleteSitePV?: Maybe<Scalars['ID']>;
  /**  발전소 생성  */
  createSite?: Maybe<Scalars['ID']>;
  /**  발전소 수정  */
  updateSite?: Maybe<Scalars['ID']>;
  /**  발전소 삭제  */
  deleteSite?: Maybe<Scalars['ID']>;
  /**  WT 형 site 생성  */
  createSiteWT?: Maybe<Scalars['ID']>;
  /**  WT 형 site 수정  */
  updateSiteWT: Scalars['ID'];
  /**  WT 형 site 삭제  */
  deleteSiteWT?: Maybe<Scalars['ID']>;
  /**  점검이력 생성  */
  createInspectionLog?: Maybe<Scalars['ID']>;
  /**  점검이력 수정  */
  updateInspectionLog?: Maybe<Scalars['ID']>;
  /**  점검이력 삭제  */
  deleteInspectionLog?: Maybe<Scalars['ID']>;
  /**  대리점 생성  */
  createAgency?: Maybe<Scalars['ID']>;
  /**  대리점 수정  */
  updateAgency?: Maybe<Scalars['ID']>;
  /**  대리점 삭제  */
  deleteAgency?: Maybe<Scalars['ID']>;
  /**  중개사업자 생성  */
  createBroker?: Maybe<Scalars['ID']>;
  /**  중개사업자 수정  */
  updateBroker?: Maybe<Scalars['ID']>;
  /**  중개사업자 삭제  */
  deleteBroker?: Maybe<Scalars['ID']>;
  /**  발전사업자 생성  */
  createGenerator?: Maybe<Scalars['ID']>;
  /**  발전사업자 수정  */
  updateGenerator?: Maybe<Scalars['ID']>;
  /**  발전사업자 삭제  */
  deleteGenerator?: Maybe<Scalars['ID']>;
  /**  집합 전력자원 생성  */
  createGroup?: Maybe<Scalars['ID']>;
  /**  집합 전력자원 수정  */
  updateGroup?: Maybe<Scalars['ID']>;
  /**  집합 전력자원 삭제  */
  deleteGroup?: Maybe<Scalars['ID']>;
  /**  집합저력자원 발전소 입력/수정  */
  replaceMapperGroup?: Maybe<Scalars['ID']>;
  /**  집합전력자원 삭제  */
  deleteMapperGroup?: Maybe<Scalars['ID']>;
};


/**  Trade root query  */
export type TradeMutationCreateBidArgs = {
  input: TradeBidPayload;
};


/**  Trade root query  */
export type TradeMutationCreateBoardArgs = {
  input: TradeBoardPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateBoardArgs = {
  input: TradeBoardPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteBoardArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateContractEssArgs = {
  input: TradeContractEssPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateContractEssArgs = {
  input: TradeContractEssPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteContractEssArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateContractFcArgs = {
  input: TradeContractFcPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateContractFcArgs = {
  input: TradeContractFcPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteContractFcArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateContractPvArgs = {
  input: TradeContractPvPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateContractPvArgs = {
  input: TradeContractPvPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteContractPvArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateContractArgs = {
  input: TradeContractPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateContractArgs = {
  input: TradeContractPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteContractArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateContractWtArgs = {
  input: TradeContractWtPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateContractWtArgs = {
  input: TradeContractWtPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteContractWtArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateDatasourceEssArgs = {
  input: TradeDatasourceEssPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateDatasourceEssArgs = {
  input: TradeDatasourceEssPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteDatasourceEssArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateDatasourcePvArgs = {
  input: TradeDatasourcePvPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateDatasourcePvArgs = {
  input: TradeDatasourcePvPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteDatasourcePvArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateDatasourceWtArgs = {
  input: TradeDatasourceWtPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateDatasourceWtArgs = {
  input: TradeDatasourceWtPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteDatasourceWtArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateSiteEssArgs = {
  input: TradeSiteEssPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateSiteEssArgs = {
  input: TradeSiteEssPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteSiteEssArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateSiteFcArgs = {
  input: TradeSiteFcPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateSiteFcArgs = {
  input: TradeSiteFcPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteSiteFcArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateSitePvArgs = {
  input: TradeSitePvPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateSitePvArgs = {
  input: TradeSitePvPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteSitePvArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateSiteArgs = {
  input: TradeSitePayload;
};


/**  Trade root query  */
export type TradeMutationUpdateSiteArgs = {
  input: TradeSitePayload;
};


/**  Trade root query  */
export type TradeMutationDeleteSiteArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateSiteWtArgs = {
  input: TradeSiteWtPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateSiteWtArgs = {
  input: TradeSiteWtPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteSiteWtArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateInspectionLogArgs = {
  input: TradeInspectionLogPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateInspectionLogArgs = {
  input: TradeInspectionLogPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteInspectionLogArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateAgencyArgs = {
  input: TradeAgencyPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateAgencyArgs = {
  input: TradeAgencyPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteAgencyArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateBrokerArgs = {
  input: TradeBrokerPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateBrokerArgs = {
  input: TradeBrokerPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteBrokerArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateGeneratorArgs = {
  input: TradeGeneratorPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateGeneratorArgs = {
  input: TradeGeneratorPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteGeneratorArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationCreateGroupArgs = {
  input: TradeGroupPayload;
};


/**  Trade root query  */
export type TradeMutationUpdateGroupArgs = {
  input: TradeGroupPayload;
};


/**  Trade root query  */
export type TradeMutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


/**  Trade root query  */
export type TradeMutationReplaceMapperGroupArgs = {
  input: Array<TradeMapperGroupSiteMonthlyPayload>;
};


/**  Trade root query  */
export type TradeMutationDeleteMapperGroupArgs = {
  input: Array<TradeMapperGroupSiteMonthlyPayload>;
};

/**  입찰 등록 payload  */
export type TradeBidPayload = {
  /**  입찰 종류  */
  type: TradeBidTypeE;
  /**  집합자원 ID  */
  groupId: Scalars['ID'];
  /**  입찰일  */
  date: Scalars['Date'];
  /**  예측발전량 조회 시작 범위  */
  from: Scalars['DateTime'];
  /**  예측발전량 조회 종료 범위  */
  to: Scalars['DateTime'];
};

export type TradeBoardPayload = {
  /**  게시판 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  중개사업자 ID  */
  brokerId: Scalars['ID'];
  /**  작성자  */
  writer: Scalars['String'];
  /**  제목  */
  title: Scalars['String'];
  /**  내용  */
  content: Scalars['String'];
  /**  첨부파일  */
  fileIds?: Maybe<Scalars['JSON']>;
};

/**  ESS REC 거래 정보 등록/수정 Payload  */
export type TradeContractEssPayload = {
  /**  ESS REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  ESS 설비 ID  */
  essId: Scalars['ID'];
  /**  전력거래대상(kpx/kepco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  ess 기여도  */
  contributionRate: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
};

/**  FC REC 거래 정보 등록/수정 Payload  */
export type TradeContractFcPayload = {
  /**  FC REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  fc 설비 ID  */
  fcId: Scalars['ID'];
  /**  전력거래대상(kpx/kewco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  등록일  */
  createdAt?: Maybe<Scalars['DateTime']>;
};

/**  PV REC 거래 정보 등록/수정 Payload  */
export type TradeContractPvPayload = {
  /**  PV REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  pvs 설비 ID  */
  pvId: Scalars['ID'];
  /**  전력거래대상(kpx/kepco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  등록일  */
  createdAt?: Maybe<Scalars['DateTime']>;
};

/**  REC 거래 정보 등록/수정 Payload  */
export type TradeContractPayload = {
  /**  REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  사이트 ID  */
  siteId: Scalars['ID'];
  /**  거래 타입 ID  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  피크 가중치  */
  peakWeight?: Maybe<Scalars['Float']>;
  /**  REC 가격  */
  recPrice?: Maybe<Scalars['Float']>;
};

/**  WT REC 거래 정보 등록/수정 Payload  */
export type TradeContractWtPayload = {
  /**  WT REC 계약 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  wt 설비 ID  */
  wtId: Scalars['ID'];
  /**  전력거래대상(kpx/kewco)  */
  smpBuyerId: Scalars['ID'];
  /**  거래 유형  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  고정가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  등록일  */
  createdAt?: Maybe<Scalars['DateTime']>;
};

/**  ESS datasource 등록정보  */
export type TradeDatasourceEssPayload = {
  /**  id  */
  id?: Maybe<Scalars['ID']>;
  /**  ESS ID  */
  essId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

/**  PV datasource 등록정보  */
export type TradeDatasourcePvPayload = {
  /**  id  */
  id?: Maybe<Scalars['ID']>;
  /**  PV ID  */
  pvId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

/**  WT datasource 등록정보  */
export type TradeDatasourceWtPayload = {
  /**  id  */
  id?: Maybe<Scalars['ID']>;
  /**  WT ID  */
  wtId: Scalars['ID'];
  /**  datasource ID  */
  datasourceId: Scalars['ID'];
  /**  data  */
  data?: Maybe<Scalars['JSON']>;
};

/**  ESS 형 site 에 대한 고유 정보  */
export type TradeSiteEssPayload = {
  /**  ess 설비 idx  */
  id?: Maybe<Scalars['ID']>;
  /**  발전소 idx  */
  siteId: Scalars['ID'];
  /**  ess 설비 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  pcsCapacity?: Maybe<Scalars['Float']>;
  /**  배터리 설비용량  */
  batteryCapacity?: Maybe<Scalars['Float']>;
};

/**  FC 형 site 에 대한 고유 정보  */
export type TradeSiteFcPayload = {
  /**  FC 설비 idx  */
  id?: Maybe<Scalars['ID']>;
  /**  발전소 idx  */
  siteId: Scalars['ID'];
  /**  FC 설비 상태 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
};

/**  PV 형 site 에 대한 고유 정보  */
export type TradeSitePvPayload = {
  /**  PV 설비 idx  */
  id?: Maybe<Scalars['ID']>;
  /**  발전소 idx  */
  siteId: Scalars['ID'];
  /**  PV 설비 상태 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
};

/**  발전소 등록 / 수정 payload  */
export type TradeSitePayload = {
  /**  발전소 ID(string)  */
  id?: Maybe<Scalars['ID']>;
  /**  대리점 idx  */
  agencyId: Scalars['ID'];
  /**  중개사업자 idx  */
  brokerId: Scalars['ID'];
  /**  발전사업자 idx  */
  generatorId: Scalars['ID'];
  /**  디바이스 타입 idx  */
  facilityTypeId: Scalars['ID'];
  /**  smp 구매처 idx  */
  smpBuyerId?: Maybe<Scalars['ID']>;
  /**  kpx 자원코드  */
  kpxCode?: Maybe<Scalars['String']>;
  /**  발전소 명  */
  name: Scalars['String'];
  /**  집합자원 참여 시작일  */
  dateStart: Scalars['DateTime'];
  /**  집합자원 참여 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  전력 거래 가능 여부  */
  isSalesRec?: Maybe<Scalars['Boolean']>;
  /**  발전소 이미지  */
  image?: Maybe<Scalars['String']>;
  /**  발전소의 주소  */
  address?: Maybe<Scalars['String']>;
  /**  발전소의 경도  */
  lon?: Maybe<Scalars['Float']>;
  /**  발전소의 위도  */
  lat?: Maybe<Scalars['Float']>;
  /**  json format 의 발전소 attributes  */
  attributes?: Maybe<Scalars['JSON']>;
};

/**  WT 형 site 에 대한 고유 정보  */
export type TradeSiteWtPayload = {
  /**  WT 설비 idx  */
  id?: Maybe<Scalars['ID']>;
  /**  발전소 idx  */
  siteId: Scalars['ID'];
  /**  WT 설비 상태 idx  */
  stateId: Scalars['ID'];
  /**  발전기 코드  */
  code?: Maybe<Scalars['String']>;
  /**  설비용량  */
  capacity?: Maybe<Scalars['Float']>;
};

/**  점검 이력 등록 / 수정 payload  */
export type TradeInspectionLogPayload = {
  /**  점검이력 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  점검일 && 발생일자  */
  date: Scalars['Date'];
  /**  점검구분  */
  type: Scalars['ID'];
  /**  담당자  */
  manager: Scalars['String'];
  /**  작성자  */
  writer: Scalars['String'];
  /**  발전소 id  */
  siteId: Scalars['ID'];
  /**  설비구분 id  */
  facilityTypeId: Scalars['ID'];
  /**  내용  */
  content: Scalars['String'];
  /**  생성일  */
  createdAt?: Maybe<Scalars['DateTime']>;
  /**  수정일  */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /**  삭제일  */
  deletedAt?: Maybe<Scalars['DateTime']>;
};

/**  대리점 등록 / 수정 payload  */
export type TradeAgencyPayload = {
  /**  대리점 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  상위 중개사업자 ID  */
  brokerId: Scalars['ID'];
  /**  대리점 명  */
  name: Scalars['String'];
  /**  대표자  */
  owner?: Maybe<Scalars['String']>;
  /**  대표번호  */
  tel?: Maybe<Scalars['String']>;
  /**  사업자 등록번호  */
  businessNumber?: Maybe<Scalars['String']>;
};

/**  중개사업자 등록 / 수정 payload  */
export type TradeBrokerPayload = {
  /**  ID, 시스템 발급 auto increment  */
  id?: Maybe<Scalars['ID']>;
  /**  중개사업자 명  */
  name: Scalars['String'];
  /**  사업자 등록번호  */
  businessNumber?: Maybe<Scalars['String']>;
};

/**  발전사업자 등록 / 수정 payload  */
export type TradeGeneratorPayload = {
  /**  발전사업자 ID  */
  id?: Maybe<Scalars['ID']>;
  /**  대리점 ID  */
  agencyId: Scalars['ID'];
  /**  발전사업자 명  */
  name: Scalars['String'];
  /**  대표자  */
  owner?: Maybe<Scalars['String']>;
  /**  대표번호  */
  tel?: Maybe<Scalars['String']>;
  /**  사업자 등록번호  */
  businessNumber?: Maybe<Scalars['String']>;
  /**  수수료 율  */
  commissionRate?: Maybe<Scalars['Int']>;
};

/**  집합 전력 자원 등록 / 수정 payload  */
export type TradeGroupPayload = {
  /**  ID, 시스템 발급 auto increment  */
  id?: Maybe<Scalars['ID']>;
  /**  중개사업자 idx  */
  brokerId: Scalars['ID'];
  /**  집합 전력 자원명  */
  name: Scalars['String'];
  /**  상태  */
  state: Scalars['Int'];
  /**  집합 전력 자원 상태  */
  groupState?: Maybe<Scalars['String']>;
  /**  집합 전력 자원 코드  */
  code: Scalars['String'];
  /**  거래 유형  */
  saleType: Scalars['Int'];
  /**  거래 제한  */
  saleLimit: Scalars['Int'];
  /**  rec 거래  */
  isSaleRec: Scalars['Boolean'];
  /**  집합자원 시작일  */
  dateStart: Scalars['DateTime'];
  /**  집합자원 종료일  */
  dateEnd: Scalars['DateTime'];
};

/**  발전소 집합자원 월별 참여 등록 / 수정  */
export type TradeMapperGroupSiteMonthlyPayload = {
  /**  사이트 ID  */
  siteId: Scalars['ID'];
  /**  참여 날짜(월단위)  */
  date: Scalars['DateTime'];
  /**  집합자원 id  */
  groupId: Scalars['ID'];
};

/** 서버 푸시가 가능한 필드 엔트리 */
export type Subscription = {
   __typename?: 'Subscription';
  /** 디버깅 및 API 콘솔용 서브스크립션 (관리자 인증되어야 메세지 수신) */
  admin: Scalars['JSON'];
  pm?: Maybe<PmSubscription>;
  /** 파일 업로드/수정 알림 (예시; 관리자 인증되어야 메세지 수신) */
  fileChanged: File;
  /** 파일 삭제 알림 (예시; 관리자 인증되어야 메세지 수신) */
  fileRemoved: Scalars['ID'];
};


/** 서버 푸시가 가능한 필드 엔트리 */
export type SubscriptionAdminArgs = {
  patterns: Array<Scalars['String']>;
};

/**  PM root subscfiption  */
export type PmSubscription = {
   __typename?: 'PmSubscription';
  /**
   *  dummy 
   * @deprecated Not meant for use!
   */
  dummy?: Maybe<Scalars['JSON']>;
};


export type PmDevice = {
   __typename?: 'PmDevice';
  id: Scalars['ID'];
  serialno?: Maybe<Scalars['ID']>;
  kepcoCode: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type PmSmartMeterKepco = PmSmartMeter & {
   __typename?: 'PmSmartMeterKepco';
  id: Scalars['ID'];
  serialNo: Scalars['ID'];
  kepcoMeterCode: Scalars['ID'];
  /**  해당 참여고객 한전고객번호  */
  kepcoCode?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

/** 파일 수정 요청 */
export type FileUpdatePayload = {
  id: Scalars['ID'];
  name: Scalars['String'];
  contentType: Scalars['String'];
  tags: Scalars['JSON'];
  isPrivate: Scalars['Boolean'];
};

export type DrCompany = {
   __typename?: 'DrCompany';
  /**  ID, 시스템 발급 auto increment  */
  id: Scalars['ID'];
  /**  수요관리사업자 명  */
  name: Scalars['String'];
  /**  참여고객 목록  */
  customers: Array<DrCustomer>;
  /**  참여고객 한 건  */
  customer?: Maybe<DrCustomer>;
};


export type DrCompanyCustomerArgs = {
  id: Scalars['ID'];
};

/**   등록 / 수정 payload  */
export type DrCompanyPayload = {
  /**  ID, 시스템 발급 auto increment  */
  id?: Maybe<Scalars['ID']>;
  /**   명  */
  name: Scalars['String'];
};

/**  Dr 유저 목록  */
export type DrUserList = {
   __typename?: 'DrUserList';
  /**  총 유저 수  */
  total: Scalars['Int'];
  /**  몇번째 부터  */
  offset: Scalars['Int'];
  /**  몇번째 까지  */
  limit: Scalars['Int'];
  /**  유저 목록  */
  entries: Array<DrUser>;
};

/**  REC 거래 정보(자원 REC 정보)  */
export type TradeContract = {
   __typename?: 'TradeContract';
  /**  REC 계약 ID  */
  id: Scalars['ID'];
  /**  사이트 ID  */
  siteId: Scalars['ID'];
  /**  거래 타입 ID  */
  contractTypeId: Scalars['ID'];
  /**  거래 시작일  */
  dateStart: Scalars['DateTime'];
  /**  거래 종료일  */
  dateEnd: Scalars['DateTime'];
  /**  가중치  */
  weight: Scalars['Float'];
  /**  피크 가중치  */
  peakWeight?: Maybe<Scalars['Float']>;
  /**  거래타입 명(계약방식)  */
  name?: Maybe<Scalars['String']>;
  /**  거래 상세(계약내용)  */
  detail?: Maybe<Scalars['String']>;
  /**  REC 가격  */
  recPrice?: Maybe<Scalars['Float']>;
  /**  등록일  */
  createdAt: Scalars['DateTime'];
};

/**  발전소 디바이스 타입 enum  */
export enum TradeFacilityTypeE {
  Pv = 'PV',
  Ess = 'ESS',
  Pvess = 'PVESS'
}

/**  이용율(발전시간)  */
export type TradeGenerationHours = {
   __typename?: 'TradeGenerationHours';
  /**  날짜  */
  date: Scalars['DateTime'];
  /**  발전시간  */
  hours: Scalars['Float'];
};


