import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus'

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="check" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("check");
    })

    test("span should be ", () => {
        const component = create(<ProfileStatus status="check" />);
        const root = component.root;
        let span = root.findAllByType('span')
        expect(span.length).toBe(1);
    })

    test("input shouldn't be ", () => {
        const component = create(<ProfileStatus status="check" />);
        const root = component.root;
        let input = root.findAllByType('input')
        expect(input.length).toBe(0);
    })

    test("text should be correct in the state", () => {
        const component = create(<ProfileStatus status="check" />);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe("check");
    })

    test("input should be displaid in editMode instead of span", () => {
        const component = create(<ProfileStatus status="check" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');

        expect(input.props.value).toBe("check");
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus updateStatus={mockCallback} status="check" />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})
