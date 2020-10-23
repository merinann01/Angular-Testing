import { Course } from './../model/course';
import { COURSES, findLessonsForCourse } from './../server/data';
import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('CoursesService', () => {
    let service: CoursesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CoursesService]
        });
        service = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should retrieve all courses', () => {
        service.findAllCourses().subscribe((courses) => {

            expect(courses).toBeTruthy('No courses returned');

            expect(courses.length).toBe(12, 'incorrect number of courses');

            const course = courses.find((course) => course.id === 12);

            expect(course.titles.description).toBe('Angular Testing Course');

        });

        const req = httpTestingController.expectOne('/api/courses');

        expect(req.request.method).toBe('GET');

        req.flush({ payload: Object.values(COURSES) });

    });

    it('should find a course by id', () => {
        service.findCourseById(12).subscribe((course) => {
            expect(course).toBeTruthy();
            expect(course.id).toBe(12);
        });

        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('GET');
        req.flush(COURSES[12]);
    });

    it('should save the changes of the course', () => {
        let changes: Partial<Course> = { titles: { description: 'Testing Course' } };

        service.saveCourse(12, changes).subscribe((course) => {
            expect(course.id).toBe(12);
        });

        const req = httpTestingController.expectOne('/api/courses/12');
        expect(req.request.method).toEqual('PUT');

        expect(req.request.body.titles.description).toEqual(changes.titles.description);

        req.flush({
            ...COURSES[12],
            ...changes
        });
    });

    it('should give an error if save course failed', () => {
        let changes: Partial<Course> = { titles: { description: 'Testing Course' } };

        service.saveCourse(12, changes).subscribe(
            () => fail('save courses should have failed'),
            (error: HttpErrorResponse) => {
                expect(error.status).toBe(500);
            }
        );
    });

    it('should find a list of lessons ', () => {
        service.findLessons(12).subscribe((lessons) => {
            expect(lessons).toBeTruthy();

        });

        const req = httpTestingController.expectOne((req) => req.url == '/api/lessons');

        expect(req.request.method).toEqual('GET');

        expect(req.request.params.get('courseId')).toEqual('12');

        expect(req.request.params.get('filter')).toEqual('');
        expect(req.request.params.get('sortOrder')).toEqual('asc');

        req.flush({
            payload: findLessonsForCourse(12).slice(0, 3)
        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });

});



