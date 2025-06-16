import {
  // RPCの呼び出し完了のコールバック関数の型
  sendUnaryData,
  // gRPCのサーバークラス
  Server,
  // サーバーの認証情報のクラス
  ServerCredentials,
  // RPCの呼び出しにおけるリクエストとメタデータのオブジェクト型
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { UserManagerService } from "../codegen/protos/user_grpc_pb";
import { UserRequest, UserResponse, User } from "../codegen/protos/user_pb";

// 実際には DB のような永続層から取得するはず
const users = new Map([
  [1, { id: 1, name: "Alice", isAdmin: true }],
  [2, { id: 2, name: "Bob", isAdmin: false }],
  [3, { id: 3, name: "Carol", isAdmin: false }],
]);

// getの実装
function get(
  // リクエストの関する情報
  call: ServerUnaryCall<UserRequest, UserResponse>,
  // クライアントへ応答に返すための関数
  callback: sendUnaryData<UserResponse>
) {
  // クライアントから受け取ったID
  const requestId = call.request.getId();
  // ユーザーの取得
  const targetedUser = users.get(requestId);

  // レスポンスオブジェクトの生成
  const response = new UserResponse();

  // ユーザーが存在しない場合はエラーを返す
  if (!targetedUser) {
    throw new Error("User is not found.");
  }

  const user = new User();
  user.setId(targetedUser.id);
  user.setName(targetedUser.name);
  user.setIsAdmin(targetedUser.isAdmin);

  response.setUser(user);
  // 応答を返す
  callback(null, response);
}

// サーバーの起動
function startServer() {
  const server = new Server();
  // サーバーにサービスを追加
  server.addService(UserManagerService, { get });
  // アドレス・ポートにバインドする
  server.bindAsync(
    // ポート（50051）
    "0.0.0.0:50051",
    // 認証情報なしで接続を受け入れることを指定する
    // 本来ならcreateSsl()などで安全にする
    ServerCredentials.createInsecure(),
    // バインドした後の処理
    (error, port) => {
      if (error) {
        console.error(error);
      }
      server.start();
      console.log(`server start listing on port ${port}`);
    }
  );
}

startServer();
