import { Configuration } from '../configuration';
import { App } from '../models/App';
import { DeliveryData } from '../models/DeliveryData';
import { ExportPlayersRequestBody } from '../models/ExportPlayersRequestBody';
import { GetNotificationRequestBody } from '../models/GetNotificationRequestBody';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse201 } from '../models/InlineResponse201';
import { Notification } from '../models/Notification';
import { NotificationSlice } from '../models/NotificationSlice';
import { OutcomesData } from '../models/OutcomesData';
import { Player } from '../models/Player';
import { PlayerSlice } from '../models/PlayerSlice';
import { Segment } from '../models/Segment';
import { UpdatePlayerTagsRequestBody } from '../models/UpdatePlayerTagsRequestBody';
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export declare class PromiseDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    cancelNotification(appId: string, notificationId: string, _options?: Configuration): Promise<InlineResponse2001>;
    createApp(app: App, _options?: Configuration): Promise<App>;
    createNotification(notification: Notification, _options?: Configuration): Promise<InlineResponse200>;
    createPlayer(player: Player, _options?: Configuration): Promise<InlineResponse2004>;
    createSegments(appId: string, segment?: Segment, _options?: Configuration): Promise<InlineResponse201>;
    deletePlayer(appId: string, playerId: string, _options?: Configuration): Promise<InlineResponse2001>;
    deleteSegments(appId: string, segmentId: string, _options?: Configuration): Promise<InlineResponse2003>;
    exportPlayers(appId: string, exportPlayersRequestBody?: ExportPlayersRequestBody, _options?: Configuration): Promise<InlineResponse2005>;
    getApp(appId: string, _options?: Configuration): Promise<App>;
    getApps(_options?: Configuration): Promise<string>;
    getNotification(appId: string, notificationId: string, _options?: Configuration): Promise<Notification & DeliveryData & OutcomesData & object>;
    getNotificationHistory(notificationId: string, getNotificationRequestBody: GetNotificationRequestBody, _options?: Configuration): Promise<InlineResponse2002>;
    getNotifications(appId: string, limit?: string, offset?: number, kind?: 0 | 1 | 3, _options?: Configuration): Promise<NotificationSlice>;
    getOutcomes(appId: string, outcomeNames: string, outcomeNames2?: string, outcomeTimeRange?: string, outcomePlatforms?: string, outcomeAttribution?: string, _options?: Configuration): Promise<OutcomesData>;
    getPlayer(appId: string, playerId: string, emailAuthHash?: string, _options?: Configuration): Promise<Player>;
    getPlayers(appId: string, limit?: string, offset?: number, _options?: Configuration): Promise<PlayerSlice>;
    updateApp(appId: string, app: App, _options?: Configuration): Promise<App>;
    updatePlayer(playerId: string, player: Player, _options?: Configuration): Promise<InlineResponse2001>;
    updatePlayerTags(appId: string, externalUserId: string, updatePlayerTagsRequestBody?: UpdatePlayerTagsRequestBody, _options?: Configuration): Promise<InlineResponse2003>;
}