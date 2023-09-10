export const actionButton ={
      body: {
        floatSimpleMenu: '[data-test="float-button__menu-simple"]',
        floatButtonsContainer:
          '[data-test="float-button__toggle-simple-container-pinned"]',
        notepadContainer: '[data-test="scratchpad-lazy__container"]',
        notepadTitle: '[data-test="scratchpad-lazy_navigation_editor-title"]',
        notepadListOfNotes: '[data-test="scratchpad-notes__list"]',
        notepadEmptyListOfNotes: '[data-test="scratchpad-notes__empty-list"]',
        timeTrackerBodyContainer: '[data-test="time-tracker-lazy__body-container"]',
        timeSettingsBody: '[data-test="time-tracker-menu__settings-body"]',
      },
      fields: {
        searchNotepadInput: '[data-test="scratchpad-notes__input"]',
        selectTaskInput:
          '[data-test="time-tracker-current-editor-task-selector__input"]',
        manualTimeTrackingTab: '[data-test="time-tracker-lazy__option-manual"]',
        rangeTimeTrackingTab: '[data-test="time-tracker-lazy__option-range"]',
        timerTrackerTab: '[data-test="time-tracker-lazy__option-timer"]',
        enterTaskNameField:
          '[data-test="time-tracker-create-manual__task-name-field"]',
        newTaskNameField:
          '[data-test="time-tracker-create-manual__task-name-enter-field"]',
        timeTrackingTaskName: (i) =>
          `[data-test="time-tracker-group__info-task-${i}"]`,
        timeTrackingNote: (i) => `[data-test="time-tracker-group__info-note-${i}"]`,
      },
      elements: {
        timeTrackingPinnedItem:
          '[data-test="float-button_pinned-item_on-footer-time_tracking"]',
        timeTrackDurationInfo: '[data-test="time-tracker-group__info-duration"]',
        floatItem: (i) => `[data-test="float-button_item_${i}"]`,
        noteName: (name) =>
          `[data-test="scratchpad-item__content_note-name ${name}"]`,
        locationNameForTaskSearch: (i) =>
          `[data-test="task-selector__mover-project-name-${i}"]`,
        projectNameList: (i) =>
          `[data-test="task-selector_mover-item-header-${i}"]`,
        listNameLocation: (i) => `[data-test="task-selector__cat-name-text-${i}"]`,
      },
      buttons: {
        floatButtonCreateTask:
          '[data-test="float-button__toggle-simple-container-create-task"]',
        floatToggleActions: '[data-test="float-button__toggle-simple-actions"]',
        floatPinItem: '[data-test="float-button-item__pin-item"]',
        floatUnPinItem: '[data-test="float-button-item__unpin-item"]',
        clipPinnedButton: '[data-test="float-button_pinned-item_clip"]',
        timeTrackingPinnedButton:
          '[data-test="float-button_pinned-item_time_tracking"]',
        reminderPinnedButton: '[data-test="float-button_pinned-item_reminder"]',
        notepadPinnedButton: '[data-test="float-button_pinned-item_notepad"]',
        docsPinnedButton: '[data-test="float-button_pinned-item_docs"]',
        calendarPinnedButton: '[data-test="float-button_pinned-item_calendar"]',
        closeNotepad: '[data-test="scratchpad-lazy__btn_close"]',
        backToNotesButton: '[data-test="scratchpad-lazy__navigation-back"]',
        deleteNote: '[data-test="scratchpad-notes_button_delete"]',
        archiveNote: '[data-test="scratchpad-notes_button_archive"]',
        renameNote: '[data-test="scratchpad-notes_button_rename"]',
        convertNoteToTask:
          '[data-test="scratchpad-notes_button_convert-note-to-task"]',
        modalNoteCancel: '[data-test="scratchpad-lazy__modal-button-cancel"]',
        modalNoteDelete: '[data-test="scratchpad-lazy__modal-button-delete"]',
        ellipsisMenuInsideNote: '[data-test="scratchpad-lazy__btn-ellipsis"]',
        deleteNoteFromEllipsisMenu: '[data-test="scratchpad-menu__delete_notepad"]',
        taskTrayNotPinnedIcon: '[data-test="tray-bar__more-toggle-arrow"]',
        taskTrayPinnedContainer: '[data-test="tray-bar__pinned-task-tray"]',
        taskTrayPinnedButton: '[data-test="tray-item__name"]',
        removeFromTaskTray: '[data-test="tray-item__remove-task-tray"]',
        timeTrackingSettingsButton: '[data-test="time-tracker-group__settings"]',
        createNewTaskForTimeTrackingManually:
          '[data-test="time-tracker-create-manual__new-task"]',
        trackingTaskSettings: (i) =>
          `[data-test="time-tracker-group__settings-${i}"]`,
      },
    }
