# コンテナの立ち上げ

```
$ docker-compose up -d
```


# Nextサーバー用コンテナのターミナルの起動

```
$ docker exec -it campers_next-app sh
```

# Nextコンテナの初回セットアップ

```
$ npm install
```

# Nextコンテナの開発用サーバーの起動

```
$ cd next-app
$ npm run dev
```

# コンテナを閉じる

```
$ docker-compose down
```
