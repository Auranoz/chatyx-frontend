import { Decamelized } from 'humps';

import { Member } from 'entities/user';

type ApiMemberItem = Decamelized<Member>;

export interface ApiChatMembersResponse {
    list: ApiMemberItem[];
}
