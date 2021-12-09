//
//  NativeColorPicker.m
//  ContactsAssignmentClassComponent
//
//  Created by coeus on 06/12/2021.
//


//#import <UIKit/UIKit.h>
#import <React/RCTViewManager.h>

#import "ContactsAssignmentClassComponent-Swift.h"


@interface RNTPageControlManager : RCTViewManager
@end

@implementation RNTPageControlManager

//RCT_EXTERN_MODULE(NativePageControlView, NSObject)
RCT_EXPORT_MODULE(RNTPageControl)
RCT_EXPORT_VIEW_PROPERTY(progress, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(numberOfPages, NSInteger)
//RCT_EXPORT_VIEW_PROPERTY(locale, NSLocale)
//RCT_EXPORT_VIEW_PROPERTY(minimumDate, NSDate)
//RCT_EXPORT_VIEW_PROPERTY(maximumDate, NSDate)
//RCT_EXPORT_VIEW_PROPERTY(minuteInterval, NSInteger)
//RCT_EXPORT_VIEW_PROPERTY(preferredDatePickerStyle, NSInteger)
//RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)


- (UIView *)view
{
  return [[NativePageControlView alloc] init];
}

@end

//#import <Foundation/Foundation.h>
//#import "React/RCTBridgeModule.h"
//#import <React/RCTViewManager.h>
//
//@interface RCT_EXTERN_MODULE(NativePageControlView, NSObject)
//
//@end
//
//@interface RCT_EXTERN_MODULE(NativePageControlManager,RCTViewManager)
//
//@end





