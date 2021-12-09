//
//  NativeColorPicker.swift
//  ContactsAssignmentClassComponent
//
//  Created by coeus on 06/12/2021.
//

import Foundation
import UIKit
import React


@available(iOS 14.0, *)
@objc(NativeColorPicker)
class ColorPickerNative: UIViewController, UIColorPickerViewControllerDelegate {
        
    var picker: UIColorPickerViewController!
    var callback: RCTResponseSenderBlock!
    var promiseResolve: RCTPromiseResolveBlock!
    var promiseReject: RCTPromiseRejectBlock!

    @objc
    func showColorPicker(_ callback:@escaping RCTResponseSenderBlock){
        self.callback=callback
        DispatchQueue.main.async {
            self.launchColorPicker()
        }
    }
  
  @objc
  func showColorPickerWithPromise(_ promiseResolve: @escaping RCTPromiseResolveBlock, promiseReject: @escaping RCTPromiseRejectBlock){
      self.promiseResolve=promiseResolve
      self.promiseReject = promiseReject
      DispatchQueue.main.async {
          self.launchColorPicker()
      }
  }
    
    func launchColorPicker() {
        self.picker = UIColorPickerViewController()
        self.picker.delegate = self
      
        let root = RCTPresentedViewController()
        root!.present(self.picker, animated: true, completion: nil)

    }
    
    //  Called once you have finished picking the color.
    func colorPickerViewControllerDidFinish(_ viewController: UIColorPickerViewController) {
        let colorString = hexStringFromColor(color: viewController.selectedColor)
      if(colorString == ""){
            self.promiseResolve(colorString)
      }else{
            self.promiseReject("error","Could not convert Color to hex", nil)
      }
    }
    
    func hexStringFromColor(color: UIColor) -> String {
        let rgba = color.cgColor.components
        let r: CGFloat = rgba?[0] ?? 0.0
        let g: CGFloat = rgba?[1] ?? 0.0
        let b: CGFloat = rgba?[2] ?? 0.0
        let a: CGFloat = rgba?[3] ?? 0.0

        let hexString = String(format: "#%02lX%02lX%02lX%02lX", lroundf(Float(r * 255)), lroundf(Float(g * 255)), lroundf(Float(b * 255)), lroundf(Float(a * 255)))
        return hexString
     }
    
    
}
