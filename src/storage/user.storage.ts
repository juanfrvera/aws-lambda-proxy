import { DynamoDBClient, GetItemCommand } from '@aws-sdk/client-dynamodb';
import { IUser } from '../typings';

export class UserStorage {
    public async getUserByUsername(username: string): Promise<IUser | null> {
        const client = new DynamoDBClient({ region: 'sa-east-1' });
        const command = new GetItemCommand({
            TableName: 'users',
            Key: {
                username: { 'S': username }
            }
        });

        const res = await client.send(command);
        console.log(res);

        if (res.Item) {
            return {
                username: res.Item.username.S!,
                password: res.Item.password.S!
            }
        }
        return null;
    }
}