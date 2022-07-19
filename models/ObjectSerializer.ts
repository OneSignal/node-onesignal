export * from './App';
export * from './Button';
export * from './CancelNotificationSuccessResponse';
export * from './CreateNotificationBadRequestResponse';
export * from './CreateNotificationSuccessResponse';
export * from './CreatePlayerSuccessResponse';
export * from './CreateSegmentBadRequestResponse';
export * from './CreateSegmentConflictResponse';
export * from './CreateSegmentSuccessResponse';
export * from './DeletePlayerBadRequestResponse';
export * from './DeletePlayerNotFoundResponse';
export * from './DeletePlayerSuccessResponse';
export * from './DeleteSegmentBadRequestResponse';
export * from './DeleteSegmentNotFoundResponse';
export * from './DeleteSegmentSuccessResponse';
export * from './DeliveryData';
export * from './ExportPlayersRequestBody';
export * from './ExportPlayersSuccessResponse';
export * from './Filter';
export * from './FilterExpressions';
export * from './FilterNotificationTarget';
export * from './GetNotificationRequestBody';
export * from './InvalidIdentifierError';
export * from './Notification';
export * from './Notification200Errors';
export * from './NotificationAllOf';
export * from './NotificationAllOfAndroidBackgroundLayout';
export * from './NotificationHistoryBadRequestResponse';
export * from './NotificationHistorySuccessResponse';
export * from './NotificationSlice';
export * from './NotificationTarget';
export * from './NotificationWithMeta';
export * from './NotificationWithMetaAllOf';
export * from './Operator';
export * from './OutcomeData';
export * from './OutcomesData';
export * from './PlatformDeliveryData';
export * from './Player';
export * from './PlayerNotificationTarget';
export * from './PlayerSlice';
export * from './Purchase';
export * from './Segment';
export * from './SegmentNotificationTarget';
export * from './StringMap';
export * from './UpdatePlayerSuccessResponse';
export * from './UpdatePlayerTagsRequestBody';
export * from './UpdatePlayerTagsSuccessResponse';

import { App            , AppApnsEnvEnum                    } from './App';
import { Button } from './Button';
import { CancelNotificationSuccessResponse } from './CancelNotificationSuccessResponse';
import { CreateNotificationBadRequestResponse } from './CreateNotificationBadRequestResponse';
import { CreateNotificationSuccessResponse } from './CreateNotificationSuccessResponse';
import { CreatePlayerSuccessResponse } from './CreatePlayerSuccessResponse';
import { CreateSegmentBadRequestResponse } from './CreateSegmentBadRequestResponse';
import { CreateSegmentConflictResponse } from './CreateSegmentConflictResponse';
import { CreateSegmentSuccessResponse } from './CreateSegmentSuccessResponse';
import { DeletePlayerBadRequestResponse } from './DeletePlayerBadRequestResponse';
import { DeletePlayerNotFoundResponse } from './DeletePlayerNotFoundResponse';
import { DeletePlayerSuccessResponse } from './DeletePlayerSuccessResponse';
import { DeleteSegmentBadRequestResponse } from './DeleteSegmentBadRequestResponse';
import { DeleteSegmentNotFoundResponse } from './DeleteSegmentNotFoundResponse';
import { DeleteSegmentSuccessResponse } from './DeleteSegmentSuccessResponse';
import { DeliveryData } from './DeliveryData';
import { ExportPlayersRequestBody } from './ExportPlayersRequestBody';
import { ExportPlayersSuccessResponse } from './ExportPlayersSuccessResponse';
import { Filter   , FilterRelationEnum   } from './Filter';
import { FilterExpressions   , FilterExpressionsRelationEnum  , FilterExpressionsOperatorEnum   } from './FilterExpressions';
import { FilterNotificationTarget } from './FilterNotificationTarget';
import { GetNotificationRequestBody, GetNotificationRequestBodyEventsEnum     } from './GetNotificationRequestBody';
import { InvalidIdentifierError } from './InvalidIdentifierError';
import { Notification                           , NotificationAggregationEnum                                                                                        } from './Notification';
import { Notification200Errors } from './Notification200Errors';
import { NotificationAllOf   , NotificationAllOfAggregationEnum                                                                                        } from './NotificationAllOf';
import { NotificationAllOfAndroidBackgroundLayout } from './NotificationAllOfAndroidBackgroundLayout';
import { NotificationHistoryBadRequestResponse } from './NotificationHistoryBadRequestResponse';
import { NotificationHistorySuccessResponse } from './NotificationHistorySuccessResponse';
import { NotificationSlice } from './NotificationSlice';
import { NotificationTarget } from './NotificationTarget';
import { NotificationWithMeta                           , NotificationWithMetaAggregationEnum                                                                                                  } from './NotificationWithMeta';
import { NotificationWithMetaAllOf } from './NotificationWithMetaAllOf';
import { Operator, OperatorOperatorEnum   } from './Operator';
import { OutcomeData  , OutcomeDataAggregationEnum   } from './OutcomeData';
import { OutcomesData } from './OutcomesData';
import { PlatformDeliveryData } from './PlatformDeliveryData';
import { Player } from './Player';
import { PlayerNotificationTarget } from './PlayerNotificationTarget';
import { PlayerSlice } from './PlayerSlice';
import { Purchase } from './Purchase';
import { Segment } from './Segment';
import { SegmentNotificationTarget } from './SegmentNotificationTarget';
import { StringMap } from './StringMap';
import { UpdatePlayerSuccessResponse } from './UpdatePlayerSuccessResponse';
import { UpdatePlayerTagsRequestBody } from './UpdatePlayerTagsRequestBody';
import { UpdatePlayerTagsSuccessResponse } from './UpdatePlayerTagsSuccessResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AppApnsEnvEnum",
    "FilterRelationEnum",
    "FilterExpressionsRelationEnum",
    "FilterExpressionsOperatorEnum",
    "GetNotificationRequestBodyEventsEnum",
    "NotificationAggregationEnum",
    "NotificationAllOfAggregationEnum",
    "NotificationWithMetaAggregationEnum",
    "OperatorOperatorEnum",
    "OutcomeDataAggregationEnum",
]);

let typeMap: {[index: string]: any} = {
    "App": App,
    "Button": Button,
    "CancelNotificationSuccessResponse": CancelNotificationSuccessResponse,
    "CreateNotificationBadRequestResponse": CreateNotificationBadRequestResponse,
    "CreateNotificationSuccessResponse": CreateNotificationSuccessResponse,
    "CreatePlayerSuccessResponse": CreatePlayerSuccessResponse,
    "CreateSegmentBadRequestResponse": CreateSegmentBadRequestResponse,
    "CreateSegmentConflictResponse": CreateSegmentConflictResponse,
    "CreateSegmentSuccessResponse": CreateSegmentSuccessResponse,
    "DeletePlayerBadRequestResponse": DeletePlayerBadRequestResponse,
    "DeletePlayerNotFoundResponse": DeletePlayerNotFoundResponse,
    "DeletePlayerSuccessResponse": DeletePlayerSuccessResponse,
    "DeleteSegmentBadRequestResponse": DeleteSegmentBadRequestResponse,
    "DeleteSegmentNotFoundResponse": DeleteSegmentNotFoundResponse,
    "DeleteSegmentSuccessResponse": DeleteSegmentSuccessResponse,
    "DeliveryData": DeliveryData,
    "ExportPlayersRequestBody": ExportPlayersRequestBody,
    "ExportPlayersSuccessResponse": ExportPlayersSuccessResponse,
    "Filter": Filter,
    "FilterExpressions": FilterExpressions,
    "FilterNotificationTarget": FilterNotificationTarget,
    "GetNotificationRequestBody": GetNotificationRequestBody,
    "InvalidIdentifierError": InvalidIdentifierError,
    "Notification": Notification,
    "Notification200Errors": Notification200Errors,
    "NotificationAllOf": NotificationAllOf,
    "NotificationAllOfAndroidBackgroundLayout": NotificationAllOfAndroidBackgroundLayout,
    "NotificationHistoryBadRequestResponse": NotificationHistoryBadRequestResponse,
    "NotificationHistorySuccessResponse": NotificationHistorySuccessResponse,
    "NotificationSlice": NotificationSlice,
    "NotificationTarget": NotificationTarget,
    "NotificationWithMeta": NotificationWithMeta,
    "NotificationWithMetaAllOf": NotificationWithMetaAllOf,
    "Operator": Operator,
    "OutcomeData": OutcomeData,
    "OutcomesData": OutcomesData,
    "PlatformDeliveryData": PlatformDeliveryData,
    "Player": Player,
    "PlayerNotificationTarget": PlayerNotificationTarget,
    "PlayerSlice": PlayerSlice,
    "Purchase": Purchase,
    "Segment": Segment,
    "SegmentNotificationTarget": SegmentNotificationTarget,
    "StringMap": StringMap,
    "UpdatePlayerSuccessResponse": UpdatePlayerSuccessResponse,
    "UpdatePlayerTagsRequestBody": UpdatePlayerTagsRequestBody,
    "UpdatePlayerTagsSuccessResponse": UpdatePlayerTagsSuccessResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
