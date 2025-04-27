//
//  SearchBridge.swift
//  IOSBrige
//
//  Created by Siva kumar Aketi on 27/04/25.
//

// SearchBridge.swift
import Foundation

@objc(SearchBridge)
class SearchBridge: NSObject {
  
  @objc
  func searchItems(_ items: [String], query: String, resolver: @escaping RCTPromiseResolveBlock, rejecter: @escaping RCTPromiseRejectBlock) {
    let filteredItems = items.filter { $0.lowercased().contains(query.lowercased()) }
    resolver(filteredItems)
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
