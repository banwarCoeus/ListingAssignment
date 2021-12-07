//
//  NativeColorPicker.m
//  ContactsAssignmentClassComponent
//
//  Created by coeus on 06/12/2021.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(NativeColorPicker,NSObject)
RCT_EXTERN_METHOD(showColorPicker: (RCTResponseSenderBlock*)callback)
RCT_EXTERN_METHOD(showColorPickerWithPromise: (RCTPromiseResolveBlock*)promiseResolve promiseReject:(RCTPromiseRejectBlock*)promiseReject)
@end

