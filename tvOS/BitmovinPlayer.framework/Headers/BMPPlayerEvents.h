//
// Bitmovin Player iOS SDK
// Copyright (C) 2017, Bitmovin GmbH, All Rights Reserved
//
// This source code and its use and distribution, is subject to the terms
// and conditions of the applicable license agreement.
//

#ifndef BMPWebPlayerEvents_h
#define BMPWebPlayerEvents_h

#import <BitmovinPlayer/BMPPlayerEvent.h>
#import <BitmovinPlayer/BMPPlayingEvent.h>
#import <BitmovinPlayer/BMPPausedEvent.h>
#import <BitmovinPlayer/BMPTimeChangedEvent.h>
#import <BitmovinPlayer/BMPSeekEvent.h>
#import <BitmovinPlayer/BMPErrorEvent.h>
#import <BitmovinPlayer/BMPWarningEvent.h>
#import <BitmovinPlayer/BMPMetadataEvent.h>
#import <BitmovinPlayer/BMPMetadataParsedEvent.h>
#import <BitmovinPlayer/BMPPlaybackFinishedEvent.h>
#import <BitmovinPlayer/BMPRenderFirstFrameEvent.h>
#import <BitmovinPlayer/BMPSeekedEvent.h>
#import <BitmovinPlayer/BMPSourceLoadedEvent.h>
#import <BitmovinPlayer/BMPSourceUnloadedEvent.h>
#import <BitmovinPlayer/BMPVideoSizeChangedEvent.h>
#import <BitmovinPlayer/BMPCastAvailableEvent.h>
#import <BitmovinPlayer/BMPCastPausedEvent.h>
#import <BitmovinPlayer/BMPCastPlaybackFinishedEvent.h>
#import <BitmovinPlayer/BMPCastPlayingEvent.h>
#import <BitmovinPlayer/BMPCastStartedEvent.h>
#import <BitmovinPlayer/BMPCastStartEvent.h>
#import <BitmovinPlayer/BMPCastStoppedEvent.h>
#import <BitmovinPlayer/BMPCastTimeUpdatedEvent.h>
#import <BitmovinPlayer/BMPCastWaitingForDeviceEvent.h>
#import <BitmovinPlayer/BMPConfigurationUpdatedEvent.h>
#import <BitmovinPlayer/BMPFullscreenEnabledEvent.h>
#import <BitmovinPlayer/BMPFullscreenDisabledEvent.h>
#import <BitmovinPlayer/BMPFullscreenEnterEvent.h>
#import <BitmovinPlayer/BMPFullscreenExitEvent.h>
#import <BitmovinPlayer/BMPTimeShiftEvent.h>
#import <BitmovinPlayer/BMPTimeShiftedEvent.h>
#import <BitmovinPlayer/BMPDvrWindowExceededEvent.h>
#import <BitmovinPlayer/BMPStallStartedEvent.h>
#import <BitmovinPlayer/BMPStallEndedEvent.h>
#import <BitmovinPlayer/BMPCueParsedEvent.h>
#import <BitmovinPlayer/BMPCueEnterEvent.h>
#import <BitmovinPlayer/BMPCueExitEvent.h>
#import <BitmovinPlayer/BMPCueEvent.h>
#import <BitmovinPlayer/BMPSubtitleAddedEvent.h>
#import <BitmovinPlayer/BMPSubtitleRemovedEvent.h>
#import <BitmovinPlayer/BMPSubtitleChangedEvent.h>
#import <BitmovinPlayer/BMPSourceWillUnloadEvent.h>
#import <BitmovinPlayer/BMPMutedEvent.h>
#import <BitmovinPlayer/BMPUnmutedEvent.h>
#import <BitmovinPlayer/BMPAudioChangedEvent.h>
#import <BitmovinPlayer/BMPAdClickedEvent.h>
#import <BitmovinPlayer/BMPAdErrorEvent.h>
#import <BitmovinPlayer/BMPAdFinishedEvent.h>
#import <BitmovinPlayer/BMPAdManifestLoadEvent.h>
#import <BitmovinPlayer/BMPAdManifestLoadedEvent.h>
#import <BitmovinPlayer/BMPAdBreakFinishedEvent.h>
#import <BitmovinPlayer/BMPAdBreakStartedEvent.h>
#import <BitmovinPlayer/BMPAdScheduledEvent.h>
#import <BitmovinPlayer/BMPAdSkippedEvent.h>
#import <BitmovinPlayer/BMPAdStartedEvent.h>
#import <BitmovinPlayer/BMPVideoDownloadQualityChangedEvent.h>
#import <BitmovinPlayer/BMPControlsShowEvent.h>
#import <BitmovinPlayer/BMPControlsHideEvent.h>
#import <BitmovinPlayer/BMPAudioRemovedEvent.h>
#import <BitmovinPlayer/BMPAirPlayChangedEvent.h>
#import <BitmovinPlayer/BMPAirPlayAvailableEvent.h>
#import <BitmovinPlayer/BMPSourceMetadataChangedEvent.h>
#import <BitmovinPlayer/BMPAdQuartileEvent.h>

@class BMPReadyEvent;
@class BMPDestroyEvent;
@class BMPPlayEvent;
@class BMPAudioAddedEvent;
@class BMPDrmDataParsedEvent;
@class BMPDurationChangedEvent;
@class BMPDownloadFinishedEvent;

#endif /* BMPWebPlayerEvents_h */
