//
//  SearchBridge.m
//  IOSBrige
//
//  Created by Siva kumar Aketi on 27/04/25.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SearchBridge, NSObject)

RCT_EXTERN_METHOD(searchItems:(NSArray)items
                  query:(NSString)query
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
