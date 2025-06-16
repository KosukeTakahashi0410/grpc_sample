// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_user_pb = require('../protos/user_pb.js');

function serialize_UserRequest(arg) {
  if (!(arg instanceof protos_user_pb.UserRequest)) {
    throw new Error('Expected argument of type UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserRequest(buffer_arg) {
  return protos_user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserResponse(arg) {
  if (!(arg instanceof protos_user_pb.UserResponse)) {
    throw new Error('Expected argument of type UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserResponse(buffer_arg) {
  return protos_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserManagerService = exports.UserManagerService = {
  get: {
    path: '/UserManager/get',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.UserRequest,
    responseType: protos_user_pb.UserResponse,
    requestSerialize: serialize_UserRequest,
    requestDeserialize: deserialize_UserRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
};

exports.UserManagerClient = grpc.makeGenericClientConstructor(UserManagerService, 'UserManager');
