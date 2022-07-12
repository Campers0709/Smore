# コンテナの立ち上げ

```
$ docker-compose up -d
```

# Next サーバー用コンテナのターミナルの起動

```
$ docker exec -it campers_next-app sh
```

# Next コンテナの初回セットアップ

```
$ npm install
```

# Next コンテナの開発用サーバーの起動

```
$ cd next-app
$ npm run dev
```

# コンテナを閉じる

```
$ docker-compose down
```
