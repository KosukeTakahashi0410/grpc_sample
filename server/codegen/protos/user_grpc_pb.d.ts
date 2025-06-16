// package: 
// file: protos/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_user_pb from "../protos/user_pb";

interface IUserManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUserManagerService_Iget;
}

interface IUserManagerService_Iget extends grpc.MethodDefinition<protos_user_pb.UserRequest, protos_user_pb.UserResponse> {
    path: "/UserManager/get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<protos_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<protos_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<protos_user_pb.UserResponse>;
}

export const UserManagerService: IUserManagerService;

export interface IUserManagerServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<protos_user_pb.UserRequest, protos_user_pb.UserResponse>;
}

export interface IUserManagerClient {
    get(request: protos_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    get(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    get(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserManagerClient extends grpc.Client implements IUserManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: protos_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public get(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public get(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
