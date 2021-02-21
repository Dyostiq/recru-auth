import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './users';
import {AuthModule} from './auth';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/recru'),
        UsersModule,
        AuthModule,
        ConfigModule.forRoot()
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
