import * as $protobuf from "protobufjs";
/** Namespace client. */
export namespace client {

    /** Namespace lucky_egg. */
    namespace lucky_egg {

        /** RequestCode enum. */
        enum RequestCode {
            INVALID_REQUEST = 0,
            PING = 1
        }

        /** ResponseCode enum. */
        enum ResponseCode {
            INVALID_RESPONSE = 0,
            PONG = 1,
            ERROR = 2,
            LUCKY_EGG_REWARD = 100
        }

        /** Properties of a Request. */
        interface IRequest {

            /** Request cmd */
            cmd?: (client.lucky_egg.RequestCode | null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: client.lucky_egg.IRequest);

            /** Request cmd. */
            public cmd: client.lucky_egg.RequestCode;

            /**
             * Creates a new Request instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Request instance
             */
            public static create(properties?: client.lucky_egg.IRequest): client.lucky_egg.Request;

            /**
             * Encodes the specified Request message. Does not implicitly {@link client.lucky_egg.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client.lucky_egg.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link client.lucky_egg.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client.lucky_egg.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): client.lucky_egg.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): client.lucky_egg.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string | null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): client.lucky_egg.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client.lucky_egg.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Response. */
        interface IResponse {

            /** Response cmd */
            cmd?: (client.lucky_egg.ResponseCode | null);

            /** Response body */
            body?: (client.lucky_egg.IResponseBody | null);
        }

        /** Represents a Response. */
        class Response implements IResponse {

            /**
             * Constructs a new Response.
             * @param [properties] Properties to set
             */
            constructor(properties?: client.lucky_egg.IResponse);

            /** Response cmd. */
            public cmd: client.lucky_egg.ResponseCode;

            /** Response body. */
            public body?: (client.lucky_egg.IResponseBody | null);

            /**
             * Creates a new Response instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Response instance
             */
            public static create(properties?: client.lucky_egg.IResponse): client.lucky_egg.Response;

            /**
             * Encodes the specified Response message. Does not implicitly {@link client.lucky_egg.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client.lucky_egg.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Response message, length delimited. Does not implicitly {@link client.lucky_egg.Response.verify|verify} messages.
             * @param message Response message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client.lucky_egg.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Response message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): client.lucky_egg.Response;

            /**
             * Decodes a Response message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Response
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): client.lucky_egg.Response;

            /**
             * Verifies a Response message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string | null);

            /**
             * Creates a Response message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Response
             */
            public static fromObject(object: { [k: string]: any }): client.lucky_egg.Response;

            /**
             * Creates a plain object from a Response message. Also converts values to other types if specified.
             * @param message Response
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client.lucky_egg.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Response to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ResponseBody. */
        interface IResponseBody {

            /** ResponseBody rewardInfo */
            rewardInfo?: (client.lucky_egg.IRewardInfo | null);
        }

        /** Represents a ResponseBody. */
        class ResponseBody implements IResponseBody {

            /**
             * Constructs a new ResponseBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: client.lucky_egg.IResponseBody);

            /** ResponseBody rewardInfo. */
            public rewardInfo?: (client.lucky_egg.IRewardInfo | null);

            /** ResponseBody body. */
            public body?: "rewardInfo";

            /**
             * Creates a new ResponseBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResponseBody instance
             */
            public static create(properties?: client.lucky_egg.IResponseBody): client.lucky_egg.ResponseBody;

            /**
             * Encodes the specified ResponseBody message. Does not implicitly {@link client.lucky_egg.ResponseBody.verify|verify} messages.
             * @param message ResponseBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client.lucky_egg.IResponseBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResponseBody message, length delimited. Does not implicitly {@link client.lucky_egg.ResponseBody.verify|verify} messages.
             * @param message ResponseBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client.lucky_egg.IResponseBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResponseBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResponseBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): client.lucky_egg.ResponseBody;

            /**
             * Decodes a ResponseBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResponseBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): client.lucky_egg.ResponseBody;

            /**
             * Verifies a ResponseBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string | null);

            /**
             * Creates a ResponseBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResponseBody
             */
            public static fromObject(object: { [k: string]: any }): client.lucky_egg.ResponseBody;

            /**
             * Creates a plain object from a ResponseBody message. Also converts values to other types if specified.
             * @param message ResponseBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client.lucky_egg.ResponseBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResponseBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RewardInfo. */
        interface IRewardInfo {

            /** RewardInfo nickname */
            nickname?: (string | null);

            /** RewardInfo reward */
            reward?: (client.lucky_egg.IGiftInfo[] | null);
        }

        /** Represents a RewardInfo. */
        class RewardInfo implements IRewardInfo {

            /**
             * Constructs a new RewardInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: client.lucky_egg.IRewardInfo);

            /** RewardInfo nickname. */
            public nickname: string;

            /** RewardInfo reward. */
            public reward: client.lucky_egg.IGiftInfo[];

            /**
             * Creates a new RewardInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RewardInfo instance
             */
            public static create(properties?: client.lucky_egg.IRewardInfo): client.lucky_egg.RewardInfo;

            /**
             * Encodes the specified RewardInfo message. Does not implicitly {@link client.lucky_egg.RewardInfo.verify|verify} messages.
             * @param message RewardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client.lucky_egg.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RewardInfo message, length delimited. Does not implicitly {@link client.lucky_egg.RewardInfo.verify|verify} messages.
             * @param message RewardInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client.lucky_egg.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RewardInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RewardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): client.lucky_egg.RewardInfo;

            /**
             * Decodes a RewardInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RewardInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): client.lucky_egg.RewardInfo;

            /**
             * Verifies a RewardInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string | null);

            /**
             * Creates a RewardInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RewardInfo
             */
            public static fromObject(object: { [k: string]: any }): client.lucky_egg.RewardInfo;

            /**
             * Creates a plain object from a RewardInfo message. Also converts values to other types if specified.
             * @param message RewardInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client.lucky_egg.RewardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RewardInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GiftInfo. */
        interface IGiftInfo {

            /** GiftInfo giftName */
            giftName?: (string | null);

            /** GiftInfo num */
            num?: (number | null);
        }

        /** Represents a GiftInfo. */
        class GiftInfo implements IGiftInfo {

            /**
             * Constructs a new GiftInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: client.lucky_egg.IGiftInfo);

            /** GiftInfo giftName. */
            public giftName: string;

            /** GiftInfo num. */
            public num: number;

            /**
             * Creates a new GiftInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GiftInfo instance
             */
            public static create(properties?: client.lucky_egg.IGiftInfo): client.lucky_egg.GiftInfo;

            /**
             * Encodes the specified GiftInfo message. Does not implicitly {@link client.lucky_egg.GiftInfo.verify|verify} messages.
             * @param message GiftInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: client.lucky_egg.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GiftInfo message, length delimited. Does not implicitly {@link client.lucky_egg.GiftInfo.verify|verify} messages.
             * @param message GiftInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: client.lucky_egg.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GiftInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GiftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): client.lucky_egg.GiftInfo;

            /**
             * Decodes a GiftInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GiftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): client.lucky_egg.GiftInfo;

            /**
             * Verifies a GiftInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string | null);

            /**
             * Creates a GiftInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GiftInfo
             */
            public static fromObject(object: { [k: string]: any }): client.lucky_egg.GiftInfo;

            /**
             * Creates a plain object from a GiftInfo message. Also converts values to other types if specified.
             * @param message GiftInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: client.lucky_egg.GiftInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GiftInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
