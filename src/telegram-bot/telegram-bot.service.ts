import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramBotService implements OnModuleInit {
  private bot: Telegraf;

  constructor() {}
  onModuleInit() {
    this.bot = new Telegraf(process.env.BOT_TOKEN);

    Logger.log('Telegram bot service initialized');
  }
}
