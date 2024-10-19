import { describe, it, expect } from 'vitest';
import { merge, mergeCn } from '../lib/utils';

describe('merge', () => {
  it('should merge class names correctly', () => {
    expect(merge('foo', 'bar', 'baz')).toBe('foo bar baz');
    expect(merge('foo', '', 'baz')).toBe('foo baz');
    expect(merge('foo', undefined as unknown as string, 'baz')).toBe('foo baz');
    expect(merge('foo', null as unknown as string, 'baz')).toBe('foo baz');
    expect(merge('foo', false as unknown as string, 'baz')).toBe('foo baz');
    expect(merge('foo', 0 as unknown as string, 'baz')).toBe('foo 0 baz');
    expect(merge('foo', NaN as unknown as string, 'baz')).toBe('foo baz');
  });

  it('should handle objects with truthy values', () => {
    expect(merge({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should deduplicate class names', () => {
    expect(merge('foo', 'bar', 'foo', 'baz', 'bar')).toBe('foo bar baz');
  });

  it('should handle mixed strings and objects', () => {
    expect(merge('foo', { bar: true, baz: false }, 'qux', { quux: true })).toBe('foo bar qux quux');
  });
});

describe('mergeCn', () => {
  it('should merge class names correctly', () => {
    expect(mergeCn('foo', 'bar', 'baz')).toBe('foo bar baz');
    expect(mergeCn('foo', '', 'baz')).toBe('foo baz');
    expect(mergeCn('foo', undefined as unknown as string, 'baz')).toBe('foo baz');
    expect(mergeCn('foo', null as unknown as string, 'baz')).toBe('foo baz');
    expect(mergeCn('foo', false as unknown as string, 'baz')).toBe('foo baz');
    expect(mergeCn('foo', 0 as unknown as string, 'baz')).toBe('foo 0 baz');
    expect(mergeCn('foo', NaN as unknown as string, 'baz')).toBe('foo baz');
  });

  it('should handle objects with truthy values', () => {
    expect(mergeCn({ foo: true, bar: false, baz: true })).toBe('foo baz');
  });

  it('should deduplicate class names', () => {
    expect(mergeCn('foo', 'bar', 'foo', 'baz', 'bar')).toBe('foo bar baz');
  });

  it('should handle mixed strings and objects', () => {
    expect(mergeCn('foo', { bar: true, baz: false }, 'qux', { quux: true })).toBe('foo bar qux quux');
  });

  describe('merge', () => {
    it('should merge class names correctly', () => {
      expect(merge('foo', 'bar', 'baz')).toBe('foo bar baz');
      expect(merge('foo', '', 'baz')).toBe('foo baz');
      expect(merge('foo', undefined as unknown as string, 'baz')).toBe('foo baz');
      expect(merge('foo', null as unknown as string, 'baz')).toBe('foo baz');
      expect(merge('foo', false as unknown as string, 'baz')).toBe('foo baz');
      expect(merge('foo', 0 as unknown as string, 'baz')).toBe('foo 0 baz');
      expect(merge('foo', NaN as unknown as string, 'baz')).toBe('foo baz');
    });

    it('should handle objects with truthy values', () => {
      expect(merge({ foo: true, bar: false, baz: true })).toBe('foo baz');
    });

    it('should deduplicate class names', () => {
      expect(merge('foo', 'bar', 'foo', 'baz', 'bar')).toBe('foo bar baz');
    });

    it('should handle mixed strings and objects', () => {
      expect(merge('foo', { bar: true, baz: false }, 'qux', { quux: true })).toBe('foo bar qux quux');
    });
  });

  describe('mergeCn', () => {
    it('should merge class names correctly', () => {
      expect(mergeCn('foo', 'bar', 'baz')).toBe('foo bar baz');
      expect(mergeCn('foo', '', 'baz')).toBe('foo baz');
      expect(mergeCn('foo', undefined as unknown as string, 'baz')).toBe('foo baz');
      expect(mergeCn('foo', null as unknown as string, 'baz')).toBe('foo baz');
      expect(mergeCn('foo', false as unknown as string, 'baz')).toBe('foo baz');
      expect(mergeCn('foo', 0 as unknown as string, 'baz')).toBe('foo 0 baz');
      expect(mergeCn('foo', NaN as unknown as string, 'baz')).toBe('foo baz');
    });

    it('should handle objects with truthy values', () => {
      expect(mergeCn({ foo: true, bar: false, baz: true })).toBe('foo baz');
    });

    it('should deduplicate class names', () => {
      expect(mergeCn('foo', 'bar', 'foo', 'baz', 'bar')).toBe('foo bar baz');
    });

    it('should handle mixed strings and objects', () => {
      expect(mergeCn('foo', { bar: true, baz: false }, 'qux', { quux: true })).toBe('foo bar qux quux');
    });

    it('should handle empty input', () => {
      expect(mergeCn()).toBe('');
    });

    it('should handle only falsy values', () => {
      expect(mergeCn('', undefined as unknown as string, null as unknown as string, false as unknown as string)).toBe('');
    });
  });
});