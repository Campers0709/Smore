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

import json
import boto3
dynamodb = boto3.client('dynamodb')
DB_ITEM_TABLE_NAME = "smore_item_v1"

def lambda_handler(event, context):
item_id = event["item_id"]
category_id = event["category_id"]

    dynamodb.update_item(
        TableName=DB_ITEM_TABLE_NAME,
        Key={'item_id': {
            "N": str(item_id)
        }},
        UpdateExpression="set #category_id=:c",
        ExpressionAttributeNames={
            '#category_id': 'category_id'
        },
        ExpressionAttributeValues={
            ':c': {
                "N": str(category_id)
            }
        }
    )

    return {
        'statusCode': 200,
        'body': "OK"
    }
