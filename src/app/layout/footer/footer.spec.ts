import { describe, it, beforeEach, expect } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the footer component', () => {
    const fixture = TestBed.createComponent(Footer);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the navigation links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.links a');
    expect(links.length).toBe(4);
    expect(links[0].textContent?.trim()).toBe('HOME');
    expect(links[1].textContent?.trim()).toBe('HEADPHONES');
    expect(links[2].textContent?.trim()).toBe('SPEAKERS');
    expect(links[3].textContent?.trim()).toBe('EARPHONES');
  });

  it('should render the logo with correct alt text', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const logoImg = compiled.querySelector('.logo img');
    expect(logoImg).toBeTruthy();
    expect(logoImg?.getAttribute('alt')).toBe('Audiophile Logo');
  });

  it('should render the social links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = compiled.querySelectorAll('.social-links a img');
    expect(socialLinks.length).toBe(3);
    expect(socialLinks[0].getAttribute('alt')).toBe('Facebook');
    expect(socialLinks[1].getAttribute('alt')).toBe('Twitter');
    expect(socialLinks[2].getAttribute('alt')).toBe('Instagram');
  });
});
