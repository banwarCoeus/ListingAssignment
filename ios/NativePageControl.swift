//
//  NativePageControl.swift
//  ContactsAssignmentClassComponent
//
//  Created by coeus on 06/12/2021.
//

import Foundation
import CHIPageControl
import React
import UIKit


@objc(NativePageControlView)
open class NativePageControlView: UIView {
  
    var pageControl: CHIPageControlJalapeno = CHIPageControlJalapeno(frame: CGRect(x: 0, y:0, width: 100, height: 20))
    override init(frame: CGRect) {
      super.init(frame: frame)
      setupView()
    }
  
  required public init?(coder aDecoder: NSCoder) {
      super.init(coder: aDecoder)
      setupView()
    }
  
    private func setupView() {
      pageControl.numberOfPages = 4
      pageControl.radius = 4
      pageControl.tintColor = .red
      pageControl.currentPageTintColor = .green
      pageControl.padding = 6
      self.addSubview(pageControl)
    }
  
  
  
  @objc
  func setNumberOfPages(_ pages: NSInteger){
    pageControl.numberOfPages = pages
  }
  
  @objc
  func setProgress(_ progressValue: NSInteger){
    pageControl.set(progress: progressValue, animated: true)
  }
  
  
}


//class PageControlViewNative: UIView {
//
//  var pageControl: CHIPageControlAji = CHIPageControlAji(frame: CGRect(x: 0, y:0, width: 100, height: 20))
//
//  override init(frame: CGRect) {
//    super.init(frame: frame)
//    setupView()
//  }
//
//  required init?(coder aDecoder: NSCoder) {
//    super.init(coder: aDecoder)
//    setupView()
//  }
//
//  private func setupView() {
//    pageControl.numberOfPages = 4
//    pageControl.radius = 4
//    pageControl.tintColor = .red
//    pageControl.currentPageTintColor = .green
//    pageControl.padding = 6
//    self.addSubview(pageControl)
//  }
//
//
//}
