import { Injectable } from '@nestjs/common';

import {v4 as uuid} from 'uuid';

const AVATARS_API_URL = 'https://avatars.dicebear.com/api/bottts/:id.svg'; // TODO config/constants

@Injectable()
export class AvatarService {
    getRandom(): string {
        return AVATARS_API_URL.replace(':id', uuid());
    }
}
