import { Global, Module } from '@nestjs/common';
import { AvatarService } from 'src/avatar/avatar.service';

@Global()
@Module({
    providers: [AvatarService],
    exports: [AvatarService],
})
export class UtilsModule {}
