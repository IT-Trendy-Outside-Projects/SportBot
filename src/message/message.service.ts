import { Injectable } from '@nestjs/common';
import { messageDictionary, messageDictionaryKey } from './message.dictionary';
import { Context } from 'telegraf';

@Injectable()
export class MessageService {
  private readonly message = messageDictionary;
  sendMessage(ctx: Context, key: messageDictionaryKey) {
    return ctx.reply(this.message[key]);
  }
}
