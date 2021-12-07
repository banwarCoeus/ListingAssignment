// RNTDatePickerManger.m
#import <UIKit/UIKit.h>

#import <React/RCTViewManager.h>

#import "RNTDatePicker.h"

@interface RNTDatePickerManager : RCTViewManager
@end

@implementation RNTDatePickerManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(datePickerMode, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(date, NSDate)
RCT_EXPORT_VIEW_PROPERTY(locale, NSLocale)
RCT_EXPORT_VIEW_PROPERTY(minimumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(maximumDate, NSDate)
RCT_EXPORT_VIEW_PROPERTY(minuteInterval, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(preferredDatePickerStyle, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(onChange, RCTBubblingEventBlock)


- (UIView *)view
{
  return [RNTDatePicker new];
}

@end
