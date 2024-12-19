import { Global, Module } from '@nestjs/common';
import { MessageService } from './message.service';

@Global()
@Module({
  providers: [MessageService],
})
export class MessageModule {}
