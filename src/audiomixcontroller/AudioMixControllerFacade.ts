// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export default interface AudioMixControllerFacade {
  bindAudioElement(element: HTMLAudioElement): boolean;
  unbindAudioElement(): void;
}
